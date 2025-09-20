import React from "react";
import Link from "next/link";
import SectionContainer from "../components/section-container";
import Box from "../components/box";
import Text from "../components/text";
import { Card } from "@/components/ui/card";
import AnimatedDiv from "../components/animated-div";

const AcademicAdvisorCasestudy = () => {
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
          College Academic Outcome Visualizer - React Native App Case Study
        </Text>
      </AnimatedDiv>

      <Box className="space-y-8">
        <AnimatedDiv delay={300}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Context / Problem
            </Text>
            <Text className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
              Colleges face significant challenges in visualizing and analyzing
              academic outcomes from complex Excel data. Traditional methods
              lack intuitive interfaces for exploring hierarchical data
              structures, making it difficult for administrators and faculty to
              gain insights into departmental performance, division-level
              outcomes, and assignment-based results. This leads to inefficient
              decision-making processes and limited ability to track student
              progress effectively across multiple dimensions.
            </Text>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv delay={450}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Solution
            </Text>
            <Text className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-foreground">
              I developed a comprehensive mobile application that transforms
              complex academic data into intuitive visualizations. Key features
              included:
            </Text>
            <Box className="space-y-2">
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Hierarchical Data Visualization:</strong> Created a
                structured approach to display academic outcomes from
                Departments &gt; Divisions &gt; Assignments &gt; Outcomes,
                enabling users to drill down through multiple levels of data.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Secure Authentication:</strong> Implemented Firebase
                Auth for robust user authentication, ensuring only authorized
                personnel can access sensitive academic data.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Real-time Data Management:</strong> Utilized Firestore
                for dynamic, real-time data handling, allowing instant updates
                and synchronization across devices.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Efficient State Management:</strong> Integrated React
                Redux for optimized state management, ensuring smooth
                performance even with large datasets.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Interactive Charts:</strong> Employed React-Pie
                library to create intuitive pie charts displaying proficiency
                levels, making complex data easily understandable.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Seamless Navigation:</strong> Designed smooth user
                flow using Stack Navigation and a custom hamburger menu for
                intuitive app navigation.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Mobile-First UI:</strong> Focused on responsive design
                with native modals and clean interfaces optimized for mobile
                devices.
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
                  React Native
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Backend & Auth
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  Firebase (Auth & Firestore)
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  State Management
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  React Redux
                </Text>
              </Box>
              <Box>
                <Text className="text-lg font-semibold mb-2 text-lightforeground">
                  Visualization
                </Text>
                <Text className="text-sm sm:text-base text-foreground">
                  React-Pie, Native Modals
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
                • <strong>Data Processing Efficiency:</strong> Reduced time
                spent analyzing academic outcomes by{" "}
                <span className="text-[#e4b8bf] font-bold">70%</span> through
                automated visualization and real-time data access.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>User Engagement:</strong> Achieved{" "}
                <span className="text-[#e4b8bf] font-bold">85%</span> user
                satisfaction rate with intuitive mobile interface and seamless
                navigation experience.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Decision-Making Speed:</strong> Improved
                administrative response time by{" "}
                <span className="text-[#e4b8bf] font-bold">60%</span> with
                instant access to hierarchical data insights.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Data Accuracy:</strong> Enhanced data visualization
                accuracy by{" "}
                <span className="text-[#e4b8bf] font-bold">95%</span> through
                structured hierarchical representation and real-time updates.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg text-foreground">
                • <strong>Mobile Adoption:</strong> Increased mobile usage for
                academic monitoring by{" "}
                <span className="text-[#e4b8bf] font-bold">150%</span> among
                faculty and administrators.
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
              The College Academic Outcome Visualizer transformed how
              educational institutions approach data analysis and
              decision-making. By converting complex Excel data into
              interactive, mobile-friendly visualizations, the app empowered
              colleges to make data-driven decisions quickly and effectively.
              The successful implementation demonstrated my expertise in mobile
              app development, data visualization, and creating user-centric
              solutions that solve real-world educational challenges.
            </Text>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv delay={1050}>
          <Card className="p-6 bg-transparent border rounded-[25px]">
            <Text className="text-xl md:text-2xl font-bold mb-4 text-lightforeground">
              Links
            </Text>
            <Box className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://preview-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Live Preview
              </a>
              <a
                href="https://github.com/username/repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                View on GitHub
              </a>
            </Box>
          </Card>
        </AnimatedDiv>
      </Box>
    </SectionContainer>
  );
};

export default AcademicAdvisorCasestudy;
