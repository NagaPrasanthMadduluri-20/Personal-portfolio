import { Card } from "@/components/ui/card";
import React from "react";
import SectionContainer from "../section-container";
import Box from "../box";
import Text from "../text";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import AnimatedDiv from "../animated-div";
import Link from "next/link";

const Portfolio = () => {
  return (
    <SectionContainer className="pb-0">
      <Box id="portfolio" className="mt-8 md:mt-16">
        {/* Header Section */}
        <AnimatedDiv delay={0}>
          <Text className="border rounded-full p-3 py-2 inline-flex items-center text-xs md:text-sm gap-x-2 md:gap-x-3 font-semibold">
            <Sparkle size={16} fill="#e1bac5" stroke="0" /> Portfolio
          </Text>
        </AnimatedDiv>

        <AnimatedDiv delay={150}>
          <Text className="text-2xl md:text-4xl lg:text-5xl font-bold md:max-w-2xl text-lightforeground leading-tight my-4">
            Projects Across Diverse Domains
          </Text>
        </AnimatedDiv>

        {/* Project Grid */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-16">
          {/* Project Card 1 */}
          <AnimatedDiv delay={150}>
            {/* <Link
              target="_blank"
              href="https://www.behance.net/gallery/210185199/Sales-Management-SaaS-Dashboard-Responsive-UI-Design"
            > */}
            <Card className="w-full overflow-hidden group cursor-pointer h-[85%] shadow-lg rounded-2xl md:rounded-[35px] relative">
              <Box className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden">
                <Image
                  src="/Thumb 1.jpg"
                  alt="project1"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Box>

              <Box className="flex flex-wrap items-center gap-5 absolute bottom-3 md:bottom-5 left-3 md:left-5">
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  Saas Dashboard
                </Text>
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  Next.js
                </Text>
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  React.js
                </Text>
              </Box>
            </Card>
            {/* </Link> */}
          </AnimatedDiv>

          {/* Project Card 2 */}
          <AnimatedDiv delay={300}>
            {/* <Link
              target="_blank"
              href="https://www.behance.net/gallery/198395179/Ring-Jewellery-Website-Design-SHA-Rings-World"
            > */}
            <Card className="w-full overflow-hidden group cursor-pointer h-[85%] shadow-lg rounded-2xl md:rounded-[35px] relative">
              <Box className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden">
                <Image
                  src="/NT1.jpg"
                  alt="project1"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Box>

              <Box className="flex flex-wrap items-center gap-2 absolute bottom-3 md:bottom-5 left-3 md:left-5">
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  Responsive UI Design
                </Text>
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  Static Sites- (SSG)
                </Text>
              </Box>
            </Card>
            {/* </Link> */}
          </AnimatedDiv>

          {/* Project Card 3 */}
          <AnimatedDiv delay={450}>
            {/* <Link
              target="_blank"
              href="https://www.behance.net/gallery/196580685/Money-Management-App-UI-Case-Study-Pocket-Planner"
            > */}
            <Card className="w-full overflow-hidden group cursor-pointer h-[85%] shadow-lg rounded-2xl md:rounded-[35px] relative">
              <Box className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden">
                <Image
                  src="/MM.jpg"
                  alt="project1"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 63vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Box>

              <Box className="flex flex-wrap items-center gap-2 absolute bottom-3 md:bottom-5 left-3 md:left-5">
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  Mobile App
                </Text>
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  React Native
                </Text>
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  Firebase
                </Text>
              </Box>
            </Card>
            {/*  </Link> */}
          </AnimatedDiv>

          {/* Project Card 4 */}
          <AnimatedDiv delay={600}>
            {/* <Link
              target="_blank"
              href="https://www.behance.net/gallery/185602991/Cannabis-UIUX-Case-Study-Cannabis-Mobile-App-Design"
            > */}
            <Card className="w-full overflow-hidden group cursor-pointer h-[85%] shadow-lg rounded-2xl md:rounded-[35px] relative">
              <Box className="relative w-full aspect-[4/5] md:aspect-[4/5] overflow-hidden">
                <Image
                  src="/cc.jpg"
                  alt="project1"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Box>

              <Box className="flex flex-wrap items-center gap-2 absolute bottom-3 md:bottom-5 left-3 md:left-5">
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  Mobile App
                </Text>
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  ecommerce app
                </Text>
                <Text className="rounded-xl md:rounded-2xl text-xs md:text-sm p-1 px-2 border-0 bg-white">
                  React Native - gradle
                </Text>
              </Box>
            </Card>
            {/* </Link> */}
          </AnimatedDiv>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Portfolio;
