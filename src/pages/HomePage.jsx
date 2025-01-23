import React from "react";
import HomeHeroSection from "../components/home/HomeHeroSection";
import RangeSection from "../components/home/RangeSection";
import OurProducts from "../components/home/OurProducts";
import RoomsInspirations from "../components/home/RoomsInspirations";
import Setup from "../components/home/Setup";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <RangeSection/>
      <OurProducts/>
      <RoomsInspirations/>
      <Setup/>
    </>
  );
}
