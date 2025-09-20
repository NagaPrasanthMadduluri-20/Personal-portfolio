import { Syne } from "next/font/google";
import "./globals.css";
import Box from "./components/box";
import Header from "./components/Navigation/header";
import Sidebox from "./components/Sidebox/sidebox";
import SectionContainer from "./components/section-container";

const syneSans = Syne({
  variable: "--font-syne-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Naga Prasanth - Frontend Developer Portfolio",
    template: "%s | Naga Prasanth Portfolio",
  },
  description:
    "Professional portfolio showcasing web development skills, projects, and expertise in frontend technologies",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "NextJS",
    "Portfolio",
    "Web Design",
    "Frontend Engineering",
  ],
  authors: [{ name: "Naga Prasanth" }],
  creator: "Naga Prasanth",
  publisher: "Naga Prasanth",
  openGraph: {
    title: "Naga Prasanth - Frontend Developer Portfolio",
    description:
      "Professional portfolio showcasing web development skills and projects",
    url: "https://myportfolio-46x.pages.dev/",
    siteName: "My Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Open Graph image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syneSans.variable}`}>
      <body className="font-sans antialiased">
        <SectionContainer className="px-4 lg:px-24 py-6">
          <Box className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-20 sticky top-6">
            <Box className="lg:col-span-4">
              <Box className="sticky top-6 z-50 bg-transparent ">
                {" "}
                <Sidebox />{" "}
              </Box>
            </Box>
            <Box className="lg:col-span-8">
              <Box className="sticky top-6 z-50 bg-transparent">
                <Header />
              </Box>
              {children}
            </Box>
          </Box>
        </SectionContainer>
      </body>
    </html>
  );
}
