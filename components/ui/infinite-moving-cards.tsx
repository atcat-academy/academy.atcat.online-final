"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  const originalContentWidthRef = React.useRef<number>(0);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Store the original content width before duplicating
      // This will be used to calculate the animation distance
      const originalWidth = scrollerRef.current.scrollWidth;
      originalContentWidthRef.current = originalWidth;

      // Duplicate items multiple times to ensure screen is filled
      // Calculate how many duplicates we need based on container width
      const containerWidth = containerRef.current.offsetWidth || 1200;
      const estimatedCardWidth = 400;
      const gap = 16;
      const cardsNeeded = Math.ceil((containerWidth * 2) / (estimatedCardWidth + gap));
      const duplicatesNeeded = Math.max(2, Math.ceil(cardsNeeded / scrollerContent.length));

      // Duplicate enough times to fill screen and ensure seamless loop
      for (let i = 0; i < Math.max(duplicatesNeeded, 2); i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      // Calculate animation distance based on original content width
      // This ensures smooth looping without jumps
      const animationDistance = originalWidth + gap;
      if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-distance", `${animationDistance}px`);
      }

      getDirection();
      getSpeed();
      
      // Ensure transform starts at 0 before animation begins
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = 'translateX(0)';
      }
      
      // Small delay to ensure everything is ready
      requestAnimationFrame(() => {
        setStart(true);
      });
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        pauseOnHover && "group",
        className,
      )}
      onMouseEnter={() => {
        if (pauseOnHover && scrollerRef.current && start) {
          scrollerRef.current.style.animationPlayState = 'paused';
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover && scrollerRef.current && start) {
          scrollerRef.current.style.animationPlayState = 'running';
        }
      }}
    >
      <ul
        ref={scrollerRef}
        style={{ transform: start ? undefined : 'translateX(0)' }}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-atcat-white">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-atcat-blue">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-atcat-white/50">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
