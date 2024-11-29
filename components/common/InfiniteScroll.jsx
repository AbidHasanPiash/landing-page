"use client";
 
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
 
export default function InfiniteScroll ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
 
  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
 
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
 
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
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
      className={cn( "scroller relative overflow-hidden", className )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 w-max flex-nowrap space-x-10 lg:space-x-20",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center w-full h-16 md:h-24 md:mb-4">
                <img
                  src={item?.logo}
                  alt={`${item.id} logo`}
                  className="w-16 h-16 md:w-24 md:h-24 object-contain"
                />
              </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};