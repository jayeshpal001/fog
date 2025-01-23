import React from 'react'
import HeroSection from "../components/shop/ShopHeroSection";
import SubFilterBar from "../components/shop/SubFilterBar";
import Products from '../components/shop/Products';
import Features from '../components/shop/Features';

function ShopPage() {
  return (
  <>
      <HeroSection/>
      <SubFilterBar/>
      <Products/>
      <Features/>
  </>
  )
}

export default ShopPage