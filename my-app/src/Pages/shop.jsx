import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/Newcollections/Newcollection'
import NewsLetter from '../Components/Newsletter/NewsLetter'


function shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollection />
      <NewsLetter />
      
    </div>
  )
}

export default shop
