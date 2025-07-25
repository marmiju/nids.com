"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HeroContent } from "../components/heroContent/HeroContent";
import { HeroDataType } from "@/lib/heroData/HeroData";

const variants = {
  enter:  { opacity: 0, x: 10  },
  center: { opacity: 1, x: 0   },
  exit:   { opacity: 0, x: -10 },
};

const HeroCarousel = ({ herodata }: { herodata: HeroDataType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change slide every 3s
  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % herodata.length);
    }, 6000); // 6000ms = 6 seconds
    return () => clearInterval(iv);
  }, [herodata.length]);

  const currentSlide = herodata[currentIndex];

  return (
    <div className="relative w-full bg-black h-[600px]  overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <Image
            src={currentSlide.image ?? "/fallback-image.jpg"}
            alt={currentSlide.title}
            fill
            placeholder="blur"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60 flex items-center justify-start ">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
            variants={{
              enter:  { opacity: 0, y: 20  },
              center: { opacity: 1, y: 0   },
              exit:   { opacity: 0, y: -50 },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <HeroContent data={currentSlide} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCarousel;
