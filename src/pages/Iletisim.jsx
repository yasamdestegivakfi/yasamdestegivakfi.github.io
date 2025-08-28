import React from 'react'

export default function Iletisim() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">İletişim</h1>
      <p>
        Tüm sorularınız ve önerilerinizi <strong>yasamdestegivakfi@gmail.com</strong> adresine bekliyoruz.
        {' '}<a className="text-sky-600 hover:text-sky-700" href="mailto:yasamdestegivakfi@gmail.com">Mail yaz</a>
        {' '}yoluyla bize ulaşabilirsiniz.
      </p>
    </div>
  )
}
