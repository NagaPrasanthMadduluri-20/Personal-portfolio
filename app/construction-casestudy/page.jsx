import React from "react";
import Link from "next/link";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import { Card } from "@/components/ui/card";
import AnimatedDiv from "../components/animated-div";

const ConstructionCasestudy = () => {
  return (
    <SectionContainer className="pt-0">
      <Box className="mb-6">
        <Link href="/">
          <Text className="inline-flex items-center text-foreground hover:text-lightforeground transition-colors cursor-pointer">
            <span className="mr-2 text-xl">←</span>
            Back to Home
          </Text>
        </Link>
      </Box>
      <AnimatedDiv delay={150}>
        <Text className="text-2xl md:text-4xl lg:text-5xl font-bold md:max-w-2xl text-lightforeground leading-tight my-4">
          Real Estate & Construction Website – Next.js (SSG) Case Study
        </Text>
      </AnimatedDiv>

      <AnimatedDiv delay={200}>
        <Card className="p-6 bg-transparent border rounded-[25px]">
          <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
            Links
          </Text>
          <Box className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://mountainsquareconstruction.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#e4b8bf] to-[#cec4ef] rounded-lg text-black text-[20px] px-5 py-3 transition-transform duration-500 hover:scale-105"
            >
              View Live Preview
            </a>
            <a
              href="https://github.com/mountain-square-constructions/mountain-square-constructions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              View on GitHub
            </a>
          </Box>
        </Card>
      </AnimatedDiv>

      <Box className="space-y-8">
        <AnimatedDiv delay={300}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Context / Problem
            </Text>
            <Text className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
              A reputed Real Estate & Construction company in Bangalore wanted
              to expand its digital presence and showcase its premium projects.
              Their existing website lacked modern UI, SEO optimization, and
              fast performance, making it harder to attract new customers
              online. They needed a scalable, user-centric platform that could
              improve their online visibility and support business growth.
            </Text>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv delay={450}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Solution
            </Text>
            <Text className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-foreground">
              I built a Next.js Static Site Generated (SSG) website designed for
              speed, scalability, and SEO-first performance. Key features
              included:
            </Text>
            <Box className="space-y-2">
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Next.js SSG:</strong> Ensures fast page loads with
                pre-rendered pages for better SEO ranking.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Reusable Components:</strong> Built with ShadCN UI &
                TailwindCSS for consistency and scalability.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>User-Centric Design:</strong> Clean layouts with
                responsive UI, optimized for mobile, tablet, and desktop.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>SEO Optimization:</strong> Meta tags, structured data,
                and performance improvements for higher Google indexing.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Showcase of Projects:</strong> Dedicated sections for
                apartments, villas, and ongoing projects with engaging visuals.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Cloud Deployment:</strong> Hosted on Cloudflare for
                global performance and reliability.
              </Text>
            </Box>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv delay={600}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Tech Stack
            </Text>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Framework
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  Next.js (Static Site Generation)
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  UI/Styling
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  ShadCN UI + TailwindCSS
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Deployment
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  Vercel + Cloudflare
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Optimization
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  Image optimization for fast-loading galleries
                </Text>
              </Box>
            </Box>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv delay={750}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Impact
            </Text>
            <Box className="space-y-2">
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong className="text-[#e4b8bf]">Faster Performance:</strong> Improved load times
                <span className="text-[#cec4ef] font-bold">significantly</span>, delivering a smooth browsing experience.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong className="text-[#e4b8bf]">SEO Boost:</strong> Achieved <span className="text-[#cec4ef] font-bold">higher indexing</span> and
                better visibility on Google for project-related searches.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong className="text-[#e4b8bf]">Business Growth:</strong> Helped the company expand
                digitally and attract more leads through organic search.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong className="text-[#e4b8bf]">User Engagement:</strong> <span className="text-[#cec4ef] font-bold">Intuitive, mobile-first UI</span>
                improved customer retention and project inquiries.
              </Text>
            </Box>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv delay={900}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Outcome
            </Text>
            <Text className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
              The website became a powerful digital asset, positioning the
              company as a modern, trustworthy brand in Bangalore's real estate
              market. With fast performance, engaging UI, and SEO-driven growth,
              the company is now better equipped to expand its customer base and
              showcase new projects effectively.
            </Text>
          </Card>
        </AnimatedDiv>
      </Box>
    </SectionContainer>
  );
};

export default ConstructionCasestudy;
