import { Hero } from "@/components/sections/heros/hero";
import { Features } from "@/components/sections/features/features";
import Heading from "@/components/sections/section-headings/section-heading";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { StudentTestimonials } from "@/constants/testimonials";
import { InfiniteMovingCardsDemo } from "@/components/sections/instructors/instructors";
import ShinyButton from "@/components/styling/shiny-button";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/styling/grid-background";

export default function HomePage() {

  return (
    <div className="h-full w-full mx-auto">
{/* Hero Section */}
      <section className="relative  z-0">
        <GridBackground />
        <div className=" ">
            <Hero />
        </div>
      </section>
{/* ANSP Partners Section */}
      {/* <section className=" relative mt-10 sm:mt-12 h-[100px] w-full ">
        <div className="flex flex-row items-center justify-center gap-4 h-full w-full">
          <Image src="/logos/dfs.png" alt="ATCAT Logo" height={100} width={200} />
        </div>
      </section> */}

{/* Testimonials Section */}
      <section className="relative mt-10  bg-black ">
        <div className="w-full">
          <Heading className="dark:text-white/80 text-center text-balance sm:text-4xl text-[24px]">
              {"What our Students love about learning with"}
              <span className="text-atcat-100 font-inter"> ATCAT</span>
          </Heading>
          <AnimatedTestimonials testimonials={StudentTestimonials} />
        </div>
      </section>

{/* Instructors Section */}
      {/* <section className="relative h-full w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#0C0A16] to-10% to-black ">
        <Heading className="dark:text-white/80 text-center text-balance sm:text-4xl text-[24px]">
            {"What our Instructors say about"}
            <span className="text-atcat-100 font-inter"> ATCAT </span>
            {"Students"}
        </Heading>
        <InfiniteMovingCardsDemo />
      </section> */}

{/* Features Section */}
      {/* <section className="relative mt-[30px] sm:mt=[40px] h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#0C0A16]">
        <Heading className="dark:text-white/80 sm:text-4xl text-[24px] text-center text-balance">
            {"What you'll love about learning with"}
            <span className="text-atcat-100 font-inter"> ATCAT</span>
        </Heading>
        <Features />
      </section> */}

{/*Final CTA Section */}
      {/* <section className="relative mt-[20px] mb-20 sm:mt-[40px] h-full w-full max-w-[72vw] sm:max-w-[60vw] mx-auto flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#0C0A16] text-black">
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-12 mb-8 border-2 border-atcat-100 rounded-2xl bg-atcat-100 p-6">
            <p className=" text-sm font-bold mb-2">ARE YOU READY?</p>
            <p className=" text-xl font-bold">Join ATCAT Academy</p>
            <p className=" text-lg ">Sign up and start your journey to becoming an Air Traffic Controller</p>
           
          <ShinyButton href="/sign-up" className=" bg-atcat-100  relative z-10 h-14 w-full max-w-[200px] transition-shadow duration-300 capitalize mt-2">
            Sign Me Up for FREE
          </ShinyButton>
       
          </div>
      </section> */}

      
    </div>
  );
}
