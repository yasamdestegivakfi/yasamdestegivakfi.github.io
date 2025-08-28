import React from 'react'

const asset = (p) => new URL(p, import.meta.env.BASE_URL).toString()

export default function YonetimKurulu() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Yönetim Kurulu</h1>
      <img
        src={asset('assets/images/yonetim.jpg')}
        alt="Yönetim Kurulu"
        loading="lazy"
        className="w-full h-72 object-cover rounded-md mb-6"
      />
      <p>
        Yönetim kurulu üyeleri ve görev dağılımı bilgileri burada yayınlanacaktır.
      </p>
    </div>
  )
}
