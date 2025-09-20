"use client";
import React from "react";
import Box from "../box";
import Text from "../text";
import Image from "next/image";
import {
  Atom,
  Dribbble,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Sidebox = () => {
  return (
    <Box className="border p-3 rounded-[35px] bg-[#161616]">
      <Card className="w-full overflow-hidden group cursor-pointer  shadow-lg rounded-2xl md:rounded-[35px] relative">
        <Box className="relative w-full aspect-[1/1] md:aspect-[1/1] overflow-hidden">
          <Image
            src="/personImage.jpg"
            alt="project1"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Box>
      </Card>

      <Text className="text-[30px] md:text-[35px] text-lightforeground font-bold leading-10 mx-auto text-center">
        Naga Prasanth
      </Text>
      <Box className="mx-auto mt-2">
        <Text>Specialization:</Text>
        <Text className="font-semibold text-white mb-2">
          Front-end Developer
        </Text>
        <Text>Based in:</Text>
        <Text className="font-semibold text-white mb-2">Bangalore, India</Text>
      </Box>
      <Box className="flex items-center gap-x-6">
        {/* <Link href="https://www.behance.net/gnanasampath22">
          <Box className="border text-[20px] p-3 rounded-xl hover:scale-105 hover:text-white transition-transform duration-500">
            <Atom className="hover:scale-105 transition-transform duration-500" />
          </Box>
        </Link> */}
        <Link
          target="_blank"
          href="https://github.com/NagaPrasanthMadduluri-20"
        >
          <Box className="border p-3 rounded-xl hover:text-white hover:scale-105 transition-transform duration-500">
            {" "}
            {/* <Dribbble className="hover:scale-105 transition-transform duration-500" /> */}
            <Github className="hover:scale-105 transition-transform duration-500" />
          </Box>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/madduluri-nagaprasanth-2336251a6/"
        >
          <Box className="border p-3 rounded-xl hover:scale-105  hover:text-white transition-transform duration-500">
            <Linkedin className="hover:scale-105 transition-transform duration-500" />
          </Box>
        </Link>
        <Link href="#">
          <Box className="border p-3 rounded-xl hover:scale-105  hover:text-white transition-transform duration-500">
            <Instagram
              className="
          hover:scale-105 transition-transform duration-500"
            />
          </Box>
        </Link>
        <Link target="_blank" href="https://x.com/NagaprasanthM">
          <Box className="border p-3 rounded-xl hover:scale-105 hover:text-white transition-transform duration-500">
            <Twitter className="hover:scale-105 transition-transform duration-500" />
          </Box>
        </Link>
      </Box>
      <Button
        onClick={() =>
          (window.location.href = "mailto:maddulurinagaprasanth9391@gmail.com")
        }
        className="bg-gradient-to-r from-[#e4b8bf] to-[#cec4ef] font-semibold w-full py-6 rounded-[35px] hover:bg-lightforeground/90 text-[20px] text-black mt-4 transition-transform duration-500 hover:scale-105 "
      >
        Let's Work Together
      </Button>
    </Box>
  );
};

export default Sidebox;
