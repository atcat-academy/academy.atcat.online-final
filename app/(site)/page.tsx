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
    <div className="h-full w-full mx-auto overflow-x-hidden">
{/* Hero Section */}
      <section className="relative h-[950px] z-0">
        <div className="absolute inset-0 z-0 mx-h-[800px]">
        <GridBackground />
        </div>
       
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
      <section className="relative bg-atcat-blue/5 py-8 h-[1000px] md:h-[600px] ">
        <div >
          <Heading className="dark:text-atcat-white">
              {"What our Students love about learning with"}
              <span className="text-atcat-blue font-inter font-bold "> ATCAT</span>
          </Heading>
          <AnimatedTestimonials testimonials={StudentTestimonials} />
        </div>
      </section>

{/* Instructors Section */}
      <section className="relative  h-[550px] ">
        <Heading className="text-atcat-white bg-black py-10">
            {"What our Instructors say about"}
            <span className="text-atcat-blue font-inter font-bold "> ATCAT </span>
            {"Students"}
        </Heading>
        <InfiniteMovingCardsDemo />
      </section>

{/* Features Section */}
      <section className="relative -mt-20 h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-atcat-black to-atcat-blue/10  mx-auto">
      <Heading className="dark:text-atcat-white">
            {"What you'll love about learning with"}
            <span className="text-atcat-100 font-inter"> ATCAT</span>
        </Heading>
        <Features />
      </section>

{/*Final CTA Section */}
      <section className="relative h-full    mx-auto flex flex-col items-center justify-center  text-black w-[70vw] md:w-[60vw] lg:max-w-7xl">
        <div className="flex flex-col items-start justify-center gap-4 mt-12 mb-8 border-2 border-atcat-100 rounded-2xl bg-atcat-blue p-6 w-full">
            <p className=" text-sm font-bold mb-2">ARE YOU READY?</p>
            <p className=" text-xl font-bold">Join ATCAT Academy</p>
            <p className=" text-lg ">Sign up and start your journey to becoming an Air Traffic Controller</p>
           
          <ShinyButton href="/sign-up" className=" bg-atcat-100  relative z-10 h-14 w-full max-w-[200px] transition-shadow duration-300 capitalize mt-2">
            Sign Me Up for FREE
          </ShinyButton>
       
          </div>
      </section>

      
    </div>
  );
}
