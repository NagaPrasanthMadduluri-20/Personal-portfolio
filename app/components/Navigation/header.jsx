// import React from "react";
// import Box from "../box";
// import { Button } from "@/components/ui/button";

// const Header = () => {
//   return (
//     <Box className="flex items-center justify-between">
//       <Box>
//         <ul className="flex items-center bg-transparent gap-x-8 text-[18px]">
//           <li className="border rounded-full px-3 py-2 bg-none backdrop-blur-lg">
//             Home
//           </li>
//           <li className="border-0 rounded-full px-3 py-2 backdrop-blur-lg">
//             Portfolio
//           </li>
//           <li className="border-0 rounded-full px-3 py-2 backdrop-blur-lg">
//             About me
//           </li>
//           <li className="border-0 rounded-full px-3 py-2 backdrop-blur-lg">
//             Resume
//           </li>
//           <li className="border-0 rounded-full px-3 py-2 backdrop-blur-lg">
//             Contact
//           </li>
//         </ul>
//       </Box>
//       <Button className="bg-lightforeground rounded-full text-black text-[20px] px-5 py-2">
//         Let's Talk
//       </Button>
//     </Box>
//   );
// };

// export default Header;

// "use client";
// import React, { useState } from "react";
// import Box from "../box";
// import { Button } from "@/components/ui/button";
// import {
//   HomeIcon,
//   LayoutIcon,
//   MailCheckIcon,
//   PersonStandingIcon,
//   Text,
// } from "lucide-react";

// const Header = () => {
//   // State to track the active section (for highlighting)
//   const [activeSection, setActiveSection] = useState("home");

//   // Navigation items with icons
//   const navItems = [
//     { id: "home", icon: <HomeIcon className="w-6 h-6" />, label: "Home" },
//     {
//       id: "portfolio",
//       icon: <LayoutIcon className="w-6 h-6" />,
//       label: "Portfolio",
//     },
//     {
//       id: "about",
//       icon: <PersonStandingIcon className="w-6 h-6" />,
//       label: "About",
//     },
//     {
//       id: "resume",
//       icon: <Text className="w-6 h-6" />,
//       label: "Resume",
//     },
//     {
//       id: "contact",
//       icon: <MailCheckIcon className="w-6 h-6" />,
//       label: "Contact",
//     },
//   ];

//   return (
//     <Box className="sticky left-0 right-0 z-50">
//       {/* Desktop Header */}
//       <Box className="hidden md:flex items-center justify-between p-4">
//         <Box>
//           <ul className="flex items-center bg-transparent gap-x-8 text-[18px]">
//             {navItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`border-0 rounded-full px-3 py-2 backdrop-blur-lg cursor-pointer ${
//                   activeSection === item.id
//                     ? "bg-lightforeground text-black"
//                     : "bg-transparent text-lightforeground"
//                 }`}
//                 onClick={() => setActiveSection(item.id)}
//               >
//                 {item.label}
//               </li>
//             ))}
//           </ul>
//         </Box>
//         <Button className="bg-lightforeground rounded-full text-black text-[20px] px-5 py-2">
//           Let's Talk
//         </Button>
//       </Box>

//       {/* Mobile Header */}
//       <Box className="md:hidden fixed bottom-5 left-2 right-2 z-50">
//         <Box className="flex items-center justify-around bg-transparent backdrop-blur-lg rounded-[35px] p-2 border-t border-lightforeground/10">
//           {navItems.map((item) => (
//             <Box
//               key={item.id}
//               className={`flex flex-col items-center justify-center p-2 rounded-full cursor-pointer ${
//                 activeSection === item.id
//                   ? "bg-lightforeground text-black"
//                   : "text-lightforeground"
//               }`}
//               onClick={() => setActiveSection(item.id)}
//             >
//               {item.icon}
//               <span className="text-xs mt-1">{item.label}</span>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Header;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "../box";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  LayoutIcon,
  MailCheckIcon,
  MessageSquareMore,
  PersonStandingIcon,
  Text,
} from "lucide-react";

const Header = () => {
  // State to track the active section (for highlighting)
  const [activeSection, setActiveSection] = useState("home");

  // Ref to track the header height
  const headerRef = useRef(null);

  // Navigation items with icons
  const navItems = [
    { id: "home", icon: <HomeIcon className="w-6 h-6" />, label: "Home" },
    {
      id: "portfolio",
      icon: <LayoutIcon className="w-6 h-6" />,
      label: "Portfolio",
    },
    {
      id: "about",
      icon: <PersonStandingIcon className="w-6 h-6" />,
      label: "About",
    },
    {
      id: "resume",
      icon: <Text className="w-6 h-6" />,
      label: "Resume",
    },
    {
      id: "contact",
      icon: <MailCheckIcon className="w-6 h-6" />,
      label: "Contact",
    },
  ];

  // Custom smooth scroll function
  const smoothScrollTo = (element, offset = 0, duration = 800) => {
    const start = window.scrollY;
    const target = element.offsetTop - offset;
    const distance = target - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const offset = headerHeight + 20; // Additional offset (e.g., 20px)
      smoothScrollTo(section, offset);
      setActiveSection(id); // Update the active section
    } else {
      // If section doesn't exist on current page, navigate to home page
      window.location.href = `/#${id}`;
    }
  };

  // Effect to handle scroll and highlight the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const scrollPosition = window.scrollY + headerHeight + 20; // Adjust for header height and offset

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <Box ref={headerRef} className="sticky left-0 right-0 z-50">
      {/* Desktop Header */}
      <Box className="hidden md:flex items-center justify-between p-4">
        <Box>
          <ul className="flex items-center bg-transparent gap-x-8 text-[18px]">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`border-0 rounded-full px-3 py-2 backdrop-blur-lg cursor-pointer ${
                  activeSection === item.id
                    ? "bg-lightforeground text-black"
                    : "bg-transparent text-lightforeground"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </Box>
        <Button
          onClick={() =>
            (window.location.href =
              "mailto:maddulurinagaprasanth9391@gmail.com")
          }
          className="bg-gradient-to-r from-[#e4b8bf] to-[#cec4ef] rounded-full text-black text-[20px] px-5 py-5 transition-transform duration-500 hover:scale-105"
        >
          Let's Talk <MessageSquareMore />
        </Button>
      </Box>

      {/* Mobile Header */}
      <Box className="md:hidden fixed bottom-5 left-2 right-2 z-50">
        <Box className="flex items-center justify-around bg-transparent backdrop-blur-lg rounded-[35px] p-2 border-t border-lightforeground/10">
          {navItems.map((item) => (
            <Box
              key={item.id}
              className={`flex flex-col items-center justify-center p-2 rounded-full cursor-pointer ${
                activeSection === item.id
                  ? "bg-lightforeground text-black"
                  : "text-lightforeground"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
