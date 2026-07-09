#!/usr/bin/env python3
"""webp_tool.py — Yaşam Desteği Vakfı görsel yönetim aracı.

Amaç:
  * Siteye eklenen görselleri WebP'ye dönüştürmek (daha küçük, hızlı).
  * Orijinal jpg/jpeg/png dosyalarını yedek olarak images/oldpictures/ altında tutmak.
  * archive.html kolaj galerisinin görsel listesini (manifest) otomatik üretmek.

Kullanım:
  # Tek seferlik migrasyon — images/ kökündeki TÜM raster görselleri dönüştürür,
  # orijinalleri oldpictures/'a taşır ve tüm sayfa referanslarını .webp'ye günceller:
  python3 scripts/webp_tool.py --migrate

  # Arşive yeni görsel eklemek — webp'ye çevirir, orijinali oldpictures/'a taşır,
  # kolaj manifest'ine ekler:
  python3 scripts/webp_tool.py add /yol/gorsel1.jpg /yol/gorsel2.png

  # Sadece manifest'i yeniden üretmek (images/ içeriğine göre):
  python3 scripts/webp_tool.py --manifest

Not: images/icon/ (favicon) ve images/oldpictures/ dokunulmaz.
Gereksinim: Pillow (WebP destekli).
"""
from __future__ import annotations

import json
import re
import shutil
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow gerekli:  python3 -m pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "images"
OLD = IMAGES / "oldpictures"
MANIFEST = ROOT / "assets" / "js" / "archive-manifest.js"

RASTER_EXTS = {".jpg", ".jpeg", ".png"}
EXT_PRIORITY = {".jpg": 0, ".jpeg": 1, ".png": 2}

# Arşiv kolajında GÖSTERİLMEYECEK saf logo / sponsor / arayüz görselleri
# (webp adının uzantısız hâli). Kolajı düzenlemek için buraya ekleyip çıkarın.
COLLAGE_BLOCKLIST = {
    "navbarlogo", "trnavbarlogo", "trnavbarlogo-original",
    "engnavbarlogo", "engnavbarlogo-foundation", "engnavbarnew",
    "vamet", "disposet", "lscsupport1",
    "vakıf", "vakıfbanner", "malenonimage",
}


def convert(src: Path, dest: Path) -> None:
    """Bir raster görseli WebP olarak kaydeder. Şeffaflık ve EXIF yönü korunur."""
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)  # döndürülmüş fotoğrafları düzelt
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    if has_alpha:
        # logolar/grafikler: şeffaflığı koru, yüksek kalite
        if im.mode != "RGBA":
            im = im.convert("RGBA")
        im.save(dest, "WEBP", quality=90, method=6)
    else:
        if im.mode != "RGB":
            im = im.convert("RGB")
        im.save(dest, "WEBP", quality=82, method=6)


def unique_target(base: str, ext: str, taken: set[str]) -> str:
    """Çakışmayan bir <base>.webp adı üretir. Çakışırsa uzantıyı ekler (banner-png.webp)."""
    name = f"{base}.webp"
    if name not in taken:
        return name
    name = f"{base}-{ext.lstrip('.')}.webp"
    i = 2
    while name in taken:
        name = f"{base}-{ext.lstrip('.')}{i}.webp"
        i += 1
    return name


def build_manifest() -> int:
    """images/ kökündeki webp'lerden (blocklist hariç) kolaj manifest'ini üretir."""
    webps = sorted(p.name for p in IMAGES.glob("*.webp"))
    collage = [f"images/{n}" for n in webps if Path(n).stem not in COLLAGE_BLOCKLIST]
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    header = "/* Otomatik üretildi: scripts/webp_tool.py — elle düzenlemeyin. */\n"
    body = "window.ARCHIVE_IMAGES = " + json.dumps(collage, ensure_ascii=False, indent=2) + ";\n"
    MANIFEST.write_text(header + body, encoding="utf-8")
    print(f"  manifest: {len(collage)} görsel -> {MANIFEST.relative_to(ROOT)}")
    return len(collage)


def update_references(mapping: dict[str, str]) -> None:
    """Sayfalardaki eski görsel adlarını yeni webp adlarıyla değiştirir."""
    files: list[Path] = [p for p in ROOT.glob("*.html") if p.name != "archive.html"]
    files += list((ROOT / "assets" / "js").glob("*.js"))
    files += list((ROOT / "assets" / "css").glob("*.css"))
    for extra in (ROOT / "feed.xml", ROOT / "_config.yml"):
        if extra.exists():
            files.append(extra)

    patterns = {
        name: re.compile(r"(?<![A-Za-z0-9_])" + re.escape(name) + r"(?![A-Za-z0-9])")
        for name in mapping
    }
    for f in files:
        text = original = f.read_text(encoding="utf-8")
        for name, webp in mapping.items():
            text = patterns[name].sub(webp, text)
        if text != original:
            f.write_text(text, encoding="utf-8")
            print(f"  referanslar güncellendi: {f.relative_to(ROOT)}")


def migrate() -> None:
    OLD.mkdir(parents=True, exist_ok=True)
    taken = {p.name for p in IMAGES.glob("*.webp")}
    rasters = sorted(
        (p for p in IMAGES.iterdir() if p.is_file() and p.suffix.lower() in RASTER_EXTS),
        key=lambda p: (p.stem.lower(), EXT_PRIORITY[p.suffix.lower()]),
    )
    if not rasters:
        print("Dönüştürülecek raster görsel yok.")
        return
    print(f"{len(rasters)} görsel dönüştürülüyor...")
    mapping: dict[str, str] = {}
    for p in rasters:
        target = unique_target(p.stem, p.suffix.lower(), taken)
        convert(p, IMAGES / target)
        taken.add(target)
        mapping[p.name] = target
        shutil.move(str(p), str(OLD / p.name))
        print(f"  {p.name}  ->  {target}   (orijinal -> oldpictures/)")
    print("Referanslar güncelleniyor...")
    update_references(mapping)
    build_manifest()
    print("Bitti.")


def add(paths: list[str]) -> None:
    OLD.mkdir(parents=True, exist_ok=True)
    taken = {p.name for p in IMAGES.glob("*.webp")}
    for raw in paths:
        src = Path(raw)
        if not src.exists() or src.suffix.lower() not in RASTER_EXTS:
            print(f"  atlandı (bulunamadı / desteklenmeyen): {raw}")
            continue
        target = unique_target(src.stem, src.suffix.lower(), taken)
        convert(src, IMAGES / target)
        taken.add(target)
        dest_old = OLD / src.name
        if src.resolve() != dest_old.resolve():
            shutil.move(str(src), str(dest_old))
        print(f"  eklendi: images/{target}   (orijinal -> oldpictures/{src.name})")
    build_manifest()


def main(argv: list[str]) -> None:
    if not argv:
        print(__doc__)
        return
    cmd = argv[0]
    if cmd == "--migrate":
        migrate()
    elif cmd == "--manifest":
        build_manifest()
    elif cmd == "add":
        if len(argv) < 2:
            sys.exit("Kullanım: python3 scripts/webp_tool.py add <gorsel...>")
        add(argv[1:])
    else:
        print(__doc__)
        sys.exit(f"Bilinmeyen komut: {cmd}")


if __name__ == "__main__":
    main(sys.argv[1:])
