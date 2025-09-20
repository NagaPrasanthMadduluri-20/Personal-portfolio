import React from "react";
import Box from "../box";
import SectionContainer from "../section-container";
import AnimatedDiv from "../animated-div";
import Text from "../text";
import { DownloadIcon, Sparkle } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const AboutMe = () => {
  return (
    <SectionContainer className="">
      <Box id="about">
        <AnimatedDiv delay={0}>
          <Text className="border rounded-full p-2 sm:p-3 py-1 sm:py-2 inline-flex items-center text-xs sm:text-sm md:text-[14px] gap-x-2 sm:gap-x-3 font-semibold">
            <Sparkle size={14} fill="#e1bac5" stroke="0" /> About me
          </Text>
        </AnimatedDiv>
        <AnimatedDiv delay={150}>
          <Text className="w-full lg:w-[90%]  text-2xl md:text-4xl lg:text-5xl font-bold text-lightforeground my-6 sm:my-8 md:my-10 leading-normal lg:leading-[60px]">
            Creating Elegant Solutions for Every Challenge
          </Text>
        </AnimatedDiv>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-x-5">
          <AnimatedDiv delay={150}>
            <Card className="w-full sm:w-[90%] bg-transparent p-2 text-lightforeground rounded-3xl text-center">
              <Text className="text-5xl sm:text-6xl md:text-[85px] leading-snug font-bold">
                6+
              </Text>
              <Text className="text-base sm:text-lg md:text-[18px] font-semibold">
                Happy Clients
              </Text>
            </Card>
          </AnimatedDiv>
          <AnimatedDiv delay={300}>
            <Card className="w-full sm:w-[90%] bg-transparent p-2 text-lightforeground rounded-3xl text-center">
              <Text className="text-5xl sm:text-6xl md:text-[85px] leading-snug font-bold">
                1.7+
              </Text>
              <Text className="text-base sm:text-lg md:text-[18px] font-semibold">
                Years of Experience
              </Text>
            </Card>
          </AnimatedDiv>
          <AnimatedDiv delay={450}>
            <Card className="w-full sm:w-[90%] bg-transparent p-2 text-lightforeground rounded-3xl text-center">
              <Text className="text-5xl sm:text-6xl md:text-[85px] leading-snug font-bold">
                12+
              </Text>
              <Text className="text-base sm:text-lg md:text-[18px] font-semibold">
                Projects Done
              </Text>
            </Card>
          </AnimatedDiv>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10">
          <Box className="col-span-full md:col-span-8">
            <AnimatedDiv delay={450}>
              <Text className="mb-4 sm:mb-5 text-base sm:text-lg md:text-[20px]">
                I am a passionate Frontend Developer with 1.7 years of
                experience, dedicated to crafting visually compelling and
                user-centric digital experiences. With expertise in
                user-centered design principles, prototyping, and
                cross-functional collaboration, I specialize in building
                seamless interfaces that enhance user engagement, accessibility,
                and brand consistency.
              </Text>
            </AnimatedDiv>
            <AnimatedDiv delay={450}>
              <Text className="mb-6 sm:mb-7 text-base sm:text-lg md:text-[20px]">
                My skill set includes Adobe Creative Suite, Figma, Sketch, and
                Framer, allowing me to create high-performance designs that
                align with brand objectives and user needs. I am committed to
                delivering designs that are not only aesthetically appealing but
                also intuitive, functional, and impactful.
              </Text>
            </AnimatedDiv>
            <AnimatedDiv delay={500}>
              <Text className="border bg-white text-background rounded-full px-4 sm:px-5 py-2 sm:py-3 inline-flex items-center text-base sm:text-lg md:text-[18px] gap-x-2 sm:gap-x-3 font-semibold transition-transform duration-500 hover:scale-105">
                <Link
                  target="_blank"
                  href="/Prasanth_Frontend_Developer_Resume.pdf"
                >
                  Download CV
                </Link>
                <DownloadIcon size={16} strokeWidth={3} />
              </Text>
            </AnimatedDiv>
          </Box>
          <Box className="col-span-full md:col-span-4">
            <AnimatedDiv delay={150}>
              <Box className="mb-3">
                <Text className="text-sm sm:text-base">Name</Text>
                <Text className="font-semibold text-white text-base sm:text-lg">
                  Naga Prasanth
                </Text>
              </Box>
            </AnimatedDiv>
            <AnimatedDiv delay={300}>
              <Box className="mb-3">
                <Text className="text-sm sm:text-base">Phone</Text>
                <Text className="font-semibold text-white text-base sm:text-lg">
                  +91 8074481787
                </Text>
              </Box>
            </AnimatedDiv>
            <AnimatedDiv delay={400}>
              <Box className="mb-3">
                <Text className="text-sm sm:text-base">Email</Text>
                <Text className="font-semibold text-white text-base sm:text-lg overflow-hidden whitespace-normal">
                  maddulurinagaprasanth 9391@gmail.com
                </Text>
              </Box>
            </AnimatedDiv>
            <AnimatedDiv delay={500}>
              <Box className="mb-3">
                <Text className="text-sm sm:text-base">Location</Text>
                <Text className="font-semibold text-white text-base sm:text-lg">
                  Bangalore
                </Text>
              </Box>
            </AnimatedDiv>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default AboutMe;
