"use client";

import { usePathname } from "next/navigation";
import Box from "./box";
import Sidebox from "./Sidebox/sidebox";

export default function ConditionalSidebox() {
  const pathname = usePathname();
  const hideOnMobilePaths = [
    "/capstone-casestudy",
    "/construction-casestudy",
    "/academic-advisor-casestudy",
  ];
  const shouldHideOnMobile = hideOnMobilePaths.includes(pathname);

  return (
    <Box
      className={`lg:col-span-4 ${shouldHideOnMobile ? "hidden lg:block" : ""}`}
    >
      <Box className="sticky top-6 z-50 bg-transparent">
        <Sidebox />
      </Box>
    </Box>
  );
}
