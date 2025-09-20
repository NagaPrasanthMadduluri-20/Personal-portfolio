import React from "react";
import Link from "next/link";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import { Card } from "@/components/ui/card";
import AnimatedDiv from "../components/animated-div";

const CapstoneCasestudy = () => {
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
          University WebApp with RBAC and Assignment Management - Capstone Case
          Study
        </Text>
      </AnimatedDiv>

      <AnimatedDiv delay={250}>
        <Card className="p-6 bg-transparent border rounded-[25px]">
          <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
            Links
          </Text>
          <Box className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://capstonenav.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#e4b8bf] to-[#cec4ef] rounded-lg text-black text-[20px] px-5 py-3 transition-transform duration-500 hover:scale-105"
            >
              View Live Preview
            </a>
            <a
              href="https://github.com/capstonenav-789/capstonenav"
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
              Universities often struggle with inefficient assignment tracking
              and role management. Traditional paper-based or outdated digital
              systems lack robust security, making it challenging to handle the
              diverse needs of professors, students, and administrators. This
              leads to increased administrative burden, potential data breaches,
              and poor user experience.
            </Text>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv delay={450}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Solution
            </Text>
            <Text className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-foreground">
              I developed a comprehensive University WebApp that addresses these
              issues through:
            </Text>
            <Box className="space-y-2">
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Role-Based Access Control (RBAC):</strong> Implemented
                distinct dashboards tailored for admins, professors, and
                students, ensuring each user type has access only to relevant
                features.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Secure Authentication & Authorization:</strong>{" "}
                Utilized JWT-based login system to protect sensitive academic
                data and prevent unauthorized access.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Assignment Workflow:</strong> Enabled professors to
                create, assign, grade, and track assignments digitally; students
                can submit work online; admins can oversee the entire process
                and generate reports.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Scalable Architecture:</strong> Built with modern
                technologies to handle thousands of concurrent users and
                designed for easy future expansions like integration with
                learning management systems.
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
                  Frontend
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  React 19, TailwindCSS, Shadcn UI
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Backend
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  Node.js, MongoDB
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Authentication
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  JWT
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Deployment
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  Vercel
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
                • Reduced manual assignment management by approximately{" "}
                <span className="text-[#e4b8bf] font-bold">80%</span>
                compared to traditional paper workflows.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Enhanced system security</strong> with role-specific
                access controls, minimizing data breach risks.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Delivered a user-friendly, responsive UI</strong> that
                improved interaction and satisfaction for all user types.
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
              This project showcases my expertise in designing and implementing
              scalable, secure web applications that solve real-world problems.
              It demonstrates proficiency in full-stack development, security
              best practices, and user-centric design, making it a strong
              addition to my portfolio.
            </Text>
          </Card>
        </AnimatedDiv>
      </Box>
    </SectionContainer>
  );
};

export default CapstoneCasestudy;
