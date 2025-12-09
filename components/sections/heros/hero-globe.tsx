import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

export default function HeroGlobe() {
  return (
    <section className="max-w-[1024px] w-full mx-auto relative">
      
      <div className="fixed -bottom-[300px]  lg:-bottom-[650px] md:-bottom-[450px] sm:-bottom-[400px]  transition-all duration-500 ease-in-out left-0 
      scale-150 lg:scale-175 md:scale-10 z-20 pointer-events-none" style={{ maxWidth: "1024px", margin: "0 auto", right: 0 }}>
        <Spline
          scene="https://prod.spline.design/nRlvKJtayNZCG93m/scene.splinecode"
          className="w-full h-full min-h-[300px]"
        />
      </div>
      <div className="text-red-500 sm:text-orange-500 md:text-yellow-500 lg:text-green-500 xl:text-blue-500 2xl:text-purple-500 text-2xl font-bold">hi</div>
    </section>
  )
}