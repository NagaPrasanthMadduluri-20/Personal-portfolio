import React from "react";
import Link from "next/link";
import SectionContainer from "../section-container";
import Box from "../box";
import { Card } from "@/components/ui/card";
import Text from "../text";
import AnimatedDiv from "../animated-div";
import Image from "next/image"; // Import Next.js Image component for optimized images

const Projects = () => {
  const projects = [
    {
      title: "University Assigment Management System",
      tags: [
        "Nextjs",
        "React.js",
        "Tailwind css",
        "Shadcn UI",
        "Responsive Design",
        "Redux",
        "Authentication",
      ],
      description:
        "Built a secure University WebApp with RBAC and digital assignment management, reducing manual tracking by 80% and improving usability across students, professors, and admins.",
      image: "/arkansas.png",
      link: "/capstone-casestudy",
    },
    {
      title: "Real Estate & Construction Website",
      tags: [
        "Web UI",
        "Responsive Design",
        "SEO Optimized",
        "Cloudflare Deployment",
      ],
      description:
        "Built a fast-loading static site with Next.js to showcase apartments and construction projects. Designed with visually appealing layouts, user-centric navigation, and SEO optimization for better reach.",
      image: "/mountainsquare.png",
      link: "/construction-casestudy",
    },
    {
      title: "College Academic Outcome Visualizer - React Native App",
      tags: [
        "Mobile App UI",
        "Data Visualization",
        "Firebase Auth",
        "React Native",
      ],
      description:
        "Built a mobile-first academic outcome visualizer for colleges using React Native. Features secure Firebase authentication, real-time Firestore data, Redux-based state management, and intuitive charts with React-Pie. Delivered smooth navigation with stack flows, custom hamburger menu, and responsive UI components for enhanced user experience.",
      image: "/mobileapp.jpg",
      link: "/academic-advisor-casestudy",
    },
    {
      title: "Dry Fruits & Spices eCommerce App",
      tags: [
        "E-Commerce",
        "React Native",
        "Firebase",
        "User-Centric UI",
        "Cloud Deployment",
      ],
      description:
        "Developing a mobile-first eCommerce application for dry fruits and spices with secure Firebase authentication, real-time product management, and a smooth shopping experience. Features include dynamic catalogs, cart & checkout flow, and a user-friendly interface optimized for performance and scalability.",
      image: "/dryfruit.jpg",
    },
  ];

  return (
    <SectionContainer className="pt-0" id="portfolio">
      <AnimatedDiv delay={150}>
        <Text className="text-2xl md:text-4xl lg:text-5xl font-bold md:max-w-2xl text-lightforeground leading-tight my-4">
          Check out my featured projects
        </Text>
      </AnimatedDiv>
      <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch justify-center">
        {projects.map((project, index) => (
          <AnimatedDiv key={index} delay={index * 150}>
            {project.link ? (
              <Link href={project.link}>
                <Card className="w-full bg-transparent text-foreground h-full p-5 rounded-[35px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow">
                  <Box>
                    <Text className="text-xl sm:text-2xl md:text-[30px] font-bold">
                      {project.title}
                    </Text>
                    <Box className="flex flex-wrap gap-2 my-6 sm:my-8">
                      {project.tags.map((tag, i) => (
                        <Text
                          key={i}
                          className="border text-xs sm:text-sm md:text-[15px] px-2 py-1 rounded-2xl"
                        >
                          {tag}
                        </Text>
                      ))}
                    </Box>
                    <Text className="text-sm sm:text-base md:text-lg line-clamp-5">
                      {project.description}
                    </Text>
                  </Box>
                  <Box className="mt-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-[25px] object-cover"
                    />
                  </Box>
                </Card>
              </Link>
            ) : (
              <Card className="w-full bg-transparent text-foreground h-full p-5 rounded-[35px] flex flex-col justify-between">
                <Box>
                  <Text className="text-xl sm:text-2xl md:text-[30px] font-bold">
                    {project.title}
                  </Text>
                  <Box className="flex flex-wrap gap-2 my-6 sm:my-8">
                    {project.tags.map((tag, i) => (
                      <Text
                        key={i}
                        className="border text-xs sm:text-sm md:text-[15px] px-2 py-1 rounded-2xl"
                      >
                        {tag}
                      </Text>
                    ))}
                  </Box>
                  <Text className="text-sm sm:text-base md:text-lg line-clamp-5">
                    {project.description}
                  </Text>
                </Box>
                <Box className="mt-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-[25px] object-cover"
                  />
                </Box>
              </Card>
            )}
          </AnimatedDiv>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default Projects;
