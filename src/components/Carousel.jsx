import React from 'react'
// Note: Using react-bootstrap Carousel per TODO. Styling is mainly Tailwind.
import { Carousel as RBCarousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const asset = (p) => new URL(p, document.baseURI).toString()

const slides = [
  {
    src: asset('assets/images/banner1.jpg'),
    alt: 'Hasta Yakını Sosyal Yardımı',
    caption: 'Hasta Yakını Sosyal Yardımı',
    link: '/sosyalyardim',
  },
  {
    src: asset('assets/images/banner2.png'),
    alt: 'Öğrenci Bursu',
    caption: 'Öğrenci Bursu',
    link: '/ogrencibursu',
  },
  {
    src: asset('assets/images/childrenbanner.jpg'),
    alt: 'Dul ve Yetim Desteği',
    caption: 'Dul ve Yetim Aile Desteği',
    link: '/dulyetim',
  },
]

export default function Carousel() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-6">
      <div className="h-[70vh] min-h-[400px] rounded-lg shadow-lg overflow-hidden bg-black">
        <RBCarousel fade interval={5000} indicators controls>
          {slides.map((s, i) => (
            <RBCarousel.Item key={i}>
              <Link to={s.link} aria-label={s.caption}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-[70vh] object-cover object-center opacity-90 hover:opacity-100 transition"
                />
              </Link>
              <RBCarousel.Caption>
                <h3 className="text-white drop-shadow font-semibold">{s.caption}</h3>
              </RBCarousel.Caption>
            </RBCarousel.Item>
          ))}
        </RBCarousel>
      </div>
    </section>
  )
}
