import React from "react";
import SectionContainer from "../section-container";
import Box from "../box";
import AnimatedDiv from "../animated-div";
import Text from "../text";
import { Sparkle } from "lucide-react";

// Reusable Timeline Component
const Timeline = ({ title, data }) => {
  return (
    <SectionContainer>
      <AnimatedDiv delay={150}>
        <Text className="text-3xl sm:text-4xl md:text-[50px] font-bold max-w-2xl text-lightforeground leading-tight mb-8 sm:mb-10">
          {title}
        </Text>
      </AnimatedDiv>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <AnimatedDiv delay={(index + 2) * 150}>
            <Box className="border-b" />
            <Box className="flex flex-col lg:grid lg:grid-cols-12 lg:justify-between lg:items-center my-6 sm:my-8">
              <Box className="lg:col-span-2 text-sm sm:text-[16px]">
                {item.date}
              </Box>
              <Box className="my-2 lg:my-0 lg:col-span-5">
                <Text className="font-bold text-lg sm:text-[22px] text-white tracking-wider">
                  {item.title}
                </Text>
                <Text className="text-sm sm:text-[16px]">{item.subtitle}</Text>
              </Box>
              <Box className="lg:col-span-5 text-sm sm:text-[16px]">
                {item.description}
              </Box>
            </Box>
          </AnimatedDiv>
        </React.Fragment>
      ))}
    </SectionContainer>
  );
};

const Resume = () => {
  // Education Data
  const educationData = [
    {
      date: "2023 – 2024",
      title: "Front-end Courses",
      subtitle: "Udemy Online Courses",
      description:
        "Specialized training in user research, Javascript Logical Building, Design Principles, and designing intuitive digital experiences.",
    },
    {
      date: "2019 – 2023",
      title: "Bachelor Degree",
      subtitle: "Sri Venkateswara University",
      description:
        "Strong foundation in computer science, problem-solving, and software development principles.",
    },
    {
      date: "2014 - 2015",
      title: "Higher Secondary Education",
      subtitle: "Jubilation High School, Guntur",
      description:
        "Advanced studies in mathematics and science, fostering analytical thinking and creativity.",
    },
  ];

  // Work Experience Data
  const workExperienceData = [
    {
      date: " September 2023 – Present",
      title: "Frontend Developer - Invensis Technologies Pvt Ltd",
      subtitle: "J. P. Nagar, Bengaluru ",
      description:
        "Designed and optimized digital interfaces, enhancing user experience and accessibility through Development-driven UI/UX solutions.",
    },
    // {
    //   date: "October 2023 – April 2024",
    //   title: "Graphic Designer (Intern) - Digi Infiniti",
    //   subtitle: "Jayanagar 4th Block, Bengaluru",
    //   description:
    //     "Created engaging visuals for marketing and social media, ensuring brand consistency and audience engagement.",
    // },
    // {
    //   date: "2024",
    //   title: "UI/UX Designer",
    //   subtitle: "Course by Coursera",
    //   description:
    //     "Course by Coursera Research, design, and prototype effective, visually-driven websites and apps.",
    // },
  ];

  return (
    <>
      <SectionContainer>
        <Box id="resume">
          <AnimatedDiv delay={0}>
            <Text className="border rounded-full p-2 sm:p-3 py-1 sm:py-2 inline-flex items-center text-xs sm:text-sm md:text-[14px] gap-x-2 sm:gap-x-3 font-semibold">
              <Sparkle size={14} fill="#e1bac5" stroke="0" /> Resume
            </Text>
          </AnimatedDiv>
          <AnimatedDiv delay={150}>
            <Text className="text-3xl sm:text-4xl md:text-[50px] font-bold max-w-2xl text-lightforeground leading-normal lg:leading-[60px] my-8 sm:my-10 ">
              Education and Practical experience
            </Text>
          </AnimatedDiv>
          <AnimatedDiv delay={450}>
            <Text className="mb-7 text-base sm:text-lg md:text-[20px]">
              A blend of structured learning and hands-on industry experience,
              shaping my expertise in UI/UX design, development, and visual
              storytelling.
            </Text>
          </AnimatedDiv>
        </Box>
      </SectionContainer>

      {/* Education Section */}
      <Timeline title="My Education" data={educationData} />

      {/* Work Experience Section */}
      <Timeline title="Work Experience" data={workExperienceData} />
    </>
  );
};

export default Resume;
