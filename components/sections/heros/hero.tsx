"use client"
import { BackgroundBeams } from "@/components/styling/background-beams";
import { FlipWords } from "@/components/styling/flip-words";
import Link from "next/link";
import { Check } from "lucide-react";
import ShinyButton from "@/components/styling/shiny-button";
import { motion } from "framer-motion";
import { lp_flipwords } from "@/lib/constants/ui";
import { MaxWidthWrapper } from "@/components/styling/max-width-wrapper";
import Image from "next/image";
import HeroCards from "@/components/sections/heros/hero-cards";
export const Hero = () => {
  const trimmed_flipwords = lp_flipwords.map(word => word.trim());
  return (
    <MaxWidthWrapper className="relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

{/* up to large screens flex-col, from large screens flex-row */}
      <div className="opacity-100 lg:opacity-0 relative z-10 flex flex-col  items-center justify-start gap-[12px]  pb-12 pointer-events-auto lg:pointer-events-none">
      
        <div className="w-[300px] h-[300px] mt-[120px]  flex flex-col items-center justify-center  ">
          <Image src="/TestFinalv6.gif" alt="ATCAT Logo" width={100} height={100} className="w-full h-full object-contain" unoptimized={true} /> 
          
        </div>

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-center  ">
            <h1 className="text-3xl  font-bold ">Learn</h1>
            <span className="ml-2 text-3xl  font-extrabold text-red-500"> 
                <FlipWords words={trimmed_flipwords} className="text-3xl  font-bold uppercase text-atcat-blue"/>
            </span>
            <h1 className="text-3xl  font-bold text-center -ml-2 ">with ATCAT</h1>
        </div> 

        <h1 className="text-balance text-center mt-10 px-12">
            Ace the Air Traffic Controller selection process and set yourself up for a career in Aviation 
        </h1>

        <Link href="/philosophy" className=" px-8 text-sm no-wrap text-balance text-center py-1 rounded-full border-[1px] border-white/20 bg-white/30 hover:text-black hover:bg-gradient-to-r from-blue-500 to-atcat-blue text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 ">
        <p className="text-center pointer-events-none text-white">Read the Philosophy behind ATCAT</p>
        </Link>

       
          
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-80 mt-2 mb-8"
        >
          <ShinyButton href="/sign-up" className=" bg-atcat-blue/80  relative z-10 h-14 w-full  transition-shadow duration-300 capitalize mt-2">
            Sign Me Up for FREE
          </ShinyButton>
        </motion.div>

      </div>

{/* from large screens flex-row but only the image and text on the left */}
      <div className=" w-full max-w-7xl p-10 opacity-0 lg:opacity-100  relative lg:absolute lg:top-[100px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center  gap-12 pb-12 pointer-events-none lg:pointer-events-auto">
        <div className=" flex flex-row gap-12  text-white my-auto ">
          <div className="w-1/2 mx-auto flex flex-col gap-3 items-start justify-start min-w-[500px] overflow-hidden ">
            
            <h1 className="text-3xl sm:text-6xl font-bold ">
              Learn
            </h1>

            <span className="text-3xl sm:text-6xl font-extrabold"> 
              <FlipWords words={trimmed_flipwords} className="text-3xl sm:text-6xl font-bold uppercase mt-2 text-atcat-blue -ml-3"/>
            </span>

            <h1 className="text-3xl sm:text-6xl font-bold text-center  ">with ATCAT</h1>
            <Link href="/philosophy" className="mt-10 opacity-100 px-8 text-sm no-wrap text-balance text-center py-1 rounded-full border-[1px] border-white/20 bg-white/30 hover:text-black hover:bg-gradient-to-r from-blue-500 to-atcat-blue text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 ">
              <p className="text-center pointer-events-none text-white">Read the Philosophy behind ATCAT</p>
            </Link>
          </div> 

          <div className="w-[1/2] min-w-[200px]  mx-auto my-auto ">
            <Image src="/TestFinalv6.gif" alt="ATCAT Logo" width={350} height={350} />  
          </div>
        </div>

        <h1 className="text-balance text-center uppercase">Ace the Air Traffic Controller selection process and set yourself up for a career in Aviation </h1>
        
        <div className="w-90 px-4 py-6 border-2 sm:border-0 border-atcat-blue/80 rounded-[16px]">
          <ul className="space-y-2 text-white/80 text-left flex flex-col items-start ">
            {[
            "Play-to-Learn, and earn in-game rewards ",
            "Play FREE, Subscribe or Buy Once and use FOREVER",
            "Track your progress and compare against others",
            "Play-to-Earn an EXCLUSIVE invite to our Discord community",
            ].map((item, index) => (
              <li key={index} className="flex gap-1.5 items-center text-left">
                <Check className="size-5 shrink-0 text-atcat-blue" />
                {item}
              </li>
            ))}
          </ul>
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-80"
        >
          <ShinyButton href="/sign-up" className=" bg-atcat-blue  relative z-10 h-14 w-full  transition-shadow duration-300 capitalize mt-2">
            Sign Me Up for FREE
          </ShinyButton>
        </motion.div>
        
      </div>
    </MaxWidthWrapper>
  )
}