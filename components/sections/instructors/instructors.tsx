"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { InstructorTestimonials } from "@/constants/testimonials";
export function InfiniteMovingCardsDemo() {
  return (
    <div className=" h-[400px] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={InstructorTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

