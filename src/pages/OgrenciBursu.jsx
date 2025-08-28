import React from 'react'

const asset = (p) => new URL(p, document.baseURI).toString()

export default function OgrenciBursu() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Öğrenci Bursu</h1>
      <img
        src={asset('assets/images/ogrencidestek.webp')}
        alt="Öğrenci Bursu"
        loading="lazy"
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h2 className="text-lg font-semibold mb-2">Eğitimde Eşit Fırsatlar İçin Öğrenci Burs Programı</h2>
      <p>
        Eğitim hayatında maddi zorluklar yaşayan öğrencilerin gelecekte başarılı bireyler olarak topluma kazandırılmasına
        destek vermek amacıyla burs programları yürütüyoruz. Eğitimde fırsat eşitliğini sağlamayı ilke edinerek, farklı
        seviyelerdeki öğrencilerin eğitim masraflarını karşılıyor ve mentorluk desteği sunuyoruz.
      </p>
    </div>
  )
}
