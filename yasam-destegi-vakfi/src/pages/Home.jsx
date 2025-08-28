import React from 'react'
import Carousel from '../components/Carousel.jsx'
import Posts from '../components/Posts.jsx'
import Highlights from '../components/Highlights.jsx'
import Cta from '../components/Cta.jsx'

export default function Home() {
  return (
    <>
      <Carousel />
      <Posts />
      <Highlights />
      <Cta />
    </>
  )
}

