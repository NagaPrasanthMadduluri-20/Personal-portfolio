// import React from "react";
// import Box from "../box";
// import SectionContainer from "../section-container";
// import AnimatedDiv from "../animated-div";
// import Text from "../text";
// import Image from "next/image";

// const FavouriteTools = () => {
//   return (
//     <SectionContainer>
//       <Box>
//         <AnimatedDiv delay={0}>
//           <Text className="text-[25px] lg:text-[50px] font-bold lg:max-w-2xl text-lightforeground leading-tight my-10">
//             My favourite tools
//           </Text>
//         </AnimatedDiv>
//         <Box className="flex flex-wrap gap-10">
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-photoshop.png"
//                 alt="photoshop"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 <Text className="font-semibold mt-3">Photoshop</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-figma.png"
//                 alt="figma"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 <Text className="font-semibold mt-3">Figma</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-illustrator.png"
//                 alt="illustrator"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 <Text className="font-semibold mt-3">Illustrator</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-html.png"
//                 alt="html"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 <Text className="font-semibold mt-3">HTML</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-blender.png"
//                 alt="blender"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 <Text className="font-semibold mt-3">Blender</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-css.png"
//                 alt="css"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 {" "}
//                 <Text className="font-semibold mt-3">CSS</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-sketch.png"
//                 alt="sketch"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 {" "}
//                 <Text className="font-semibold mt-3">Sketch</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//           <AnimatedDiv delay={300}>
//             <Box className="border rounded-[35px] p-8 pb-4">
//               <Image
//                 src="/tools/icon-notion.png"
//                 alt="notion"
//                 width={70}
//                 height={60}
//               />
//               <AnimatedDiv delay={600}>
//                 {" "}
//                 <Text className="font-semibold mt-3">Notion</Text>
//               </AnimatedDiv>
//             </Box>
//           </AnimatedDiv>
//         </Box>
//       </Box>
//     </SectionContainer>
//   );
// };

// export default FavouriteTools;

import React from "react";
import Box from "../box";
import SectionContainer from "../section-container";
import AnimatedDiv from "../animated-div";
import Text from "../text";
import Image from "next/image";

const FavouriteTools = () => {
  // Data for favourite tools
  const tools = [
    { name: "React js", icon: "/tools/reactjs.png" },
    { name: "Next js", icon: "/tools/nextjs.jpeg" },
    { name: "Tailwind", icon: "/tools/tailwind.png" },
    { name: "Shadcn", icon: "/tools/shadcnui.png" },
    { name: "Firebase", icon: "/tools/firebase.png" },
    { name: "Cloudflare", icon: "/tools/cloudflare.webp" },
  ];

  return (
    <SectionContainer>
      <Box>
        <AnimatedDiv delay={0}>
          <Text className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-lightforeground leading-tight my-8 sm:my-10">
            My favourite tools
          </Text>
        </AnimatedDiv>
        <Box className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {tools.map((tool, index) => (
            <AnimatedDiv key={index} delay={300 + index * 50}>
              <Box className="border rounded-[35px] p-6 sm:p-8 pb-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={70}
                  height={60}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg"
                />
                <AnimatedDiv delay={600}>
                  <Text className="font-semibold mt-3 text-sm sm:text-base text-center">
                    {tool.name}
                  </Text>
                </AnimatedDiv>
              </Box>
            </AnimatedDiv>
          ))}
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default FavouriteTools;
