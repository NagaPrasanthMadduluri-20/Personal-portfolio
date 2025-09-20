import React from "react";
import SectionContainer from "../section-container";
import Box from "../box";
import {
  Atom,
  Dribbble,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
} from "lucide-react";
import AnimatedDiv from "../animated-div";
import Text from "../text";
import Link from "next/link";

const Footer = () => {
  return (
    <SectionContainer>
      <Box id="contact">
        <Box className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {/* <AnimatedDiv delay={300}>
            <Link href="https://www.behance.net/gnanasampath22">
              <Box className="border p-8 rounded-[35px] transition-transform duration-500 flex items-center justify-center hover:text-white hover:scale-110">
                <Atom size={50} />
              </Box>
            </Link>
          </AnimatedDiv> */}
          <AnimatedDiv delay={300}>
            <Link
              target="_blank"
              href="https://github.com/NagaPrasanthMadduluri-20"
            >
              <Box className="border p-8 rounded-[35px] transition-transform duration-500 flex items-center justify-center hover:text-white hover:scale-110">
                {" "}
                {/* <Dribbble size={50} /> */}
                <Github size={50} />
              </Box>
            </Link>
          </AnimatedDiv>
          <AnimatedDiv delay={300}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/madduluri-nagaprasanth-2336251a6/"
            >
              <Box className="border p-8 rounded-[35px] transition-transform duration-500 flex items-center justify-center hover:text-white hover:scale-110">
                <Linkedin size={50} />
              </Box>
            </Link>
          </AnimatedDiv>
          <AnimatedDiv delay={300}>
            <Link target="_blank" href="https://x.com/NagaprasanthM">
              <Box className="border p-8 rounded-[35px] transition-transform duration-500 flex items-center justify-center hover:text-white hover:scale-110">
                <Twitter size={50} />
              </Box>
            </Link>
          </AnimatedDiv>
          <AnimatedDiv delay={300}>
            <Link href="#">
              <Box className="border p-8 rounded-[35px] transition-transform duration-500 flex items-center justify-center hover:text-white hover:scale-110">
                <Instagram size={50} />
              </Box>
            </Link>
          </AnimatedDiv>
        </Box>
        <AnimatedDiv delay={500}>
          <Text className="mb-2 text-[25px] lg:text-[35px] text-lightforeground font-bold mt-16">
            Let's Connect!
          </Text>
          <Text className="mb-7 text-base sm:text-lg md:text-[20px]">
            Have a project in mind, want to collaborate, or just want to say
            hello? Feel free to reach out—I’d love to hear from you and will get
            back as soon as possible!
          </Text>
        </AnimatedDiv>
        <Box className="border-b" />
        <Box className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-center mt-5">
          <AnimatedDiv delay={500}>
            <Box>
              <Text className="font-medium text-white">Location</Text>
              <Text>Bangalore</Text>
            </Box>
          </AnimatedDiv>
          <AnimatedDiv delay={500}>
            <Box>
              <Text className="font-medium text-white">Phone</Text>
              <Text>80744 81787</Text>
            </Box>
          </AnimatedDiv>
          <AnimatedDiv delay={500}>
            <Box>
              <Text className="font-medium text-white">Email</Text>
              <Text>maddulurinagaprasanth 9391@gmail.com</Text>
            </Box>
          </AnimatedDiv>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Footer;
