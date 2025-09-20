"use client";
import React from "react";
import SectionContainer from "../section-container";
import Box from "../box";
import Text from "../text";
import { Download, LayoutGrid, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedDiv from "../animated-div";
import Link from "next/link";

const HeroSection = () => {
  // Custom smooth scroll function
  const smoothScrollTo = (element, offset = 0, duration = 800) => {
    const start = window.scrollY;
    const target = element.offsetTop - offset;
    const distance = target - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("portfolio");
    if (projectsSection) {
      const offset = 80; // Header offset
      smoothScrollTo(projectsSection, offset);
    }
  };

  return (
    <SectionContainer className="">
      <Box className="mt-16" id="home">
        <AnimatedDiv delay={0}>
          <Text className="border rounded-full p-3 py-2 inline-flex items-center text-[14px] gap-x-3 font-semibold">
            <Sparkle size={16} fill="#e1bac5" stroke="0" /> Let's meet !
          </Text>
        </AnimatedDiv>
        <AnimatedDiv delay={400}>
          <Text className="text-[29px] sm:text-[35px] lg:text-[60px] sm: lg:max-w-[87%] font-bold text-lightforeground leading-tight my-10">
            I'm Naga Prasanth Web and Front-end Developer.
          </Text>
        </AnimatedDiv>
        <AnimatedDiv delay={500}>
          <Text className="mb-4 sm:mb-5 text-base sm:text-lg md:text-[20px]">
            Crafting Code, Building Solutions
          </Text>
        </AnimatedDiv>
        <Box className="flex flex-col md:flex-row md:items-center md:gap-x-8">
          <AnimatedDiv delay={600}>
            <Button
              onClick={scrollToProjects}
              className="border w-full bg-gradient-to-r from-[#e4b8bf] to-[#cec4ef] md:bg-none text-background md:text-foreground mb-3 md:mb-0 rounded-full px-5 py-6 md:py-7  inline-flex items-center text-[18px] gap-x-3 font-semibold transition-transform duration-500 hover:scale-105 cursor-pointer"
            >
              My Works <LayoutGrid size={16} strokeWidth={3} />
            </Button>
          </AnimatedDiv>
          <AnimatedDiv delay={700}>
            <Button className="border md:border-0 w-full bg-transparent rounded-full px-5 py-6 md:py-7 inline-flex items-center text-[18px] gap-x-3 font-semibold transition-transform duration-500 hover:scale-105">
              <Link
                target="_blank"
                href="/Prasanth_Frontend_Developer_Resume.pdf"
              >
                Download CV
              </Link>
              <Download size={16} />
            </Button>
          </AnimatedDiv>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default HeroSection;
