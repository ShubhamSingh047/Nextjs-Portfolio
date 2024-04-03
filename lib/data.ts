import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SwiftWIN | A Concord Company",
    location: "Senior Frontend Engineering",
    description: `>Enhanced API functionality, debugged frontend issues, and documented services at Foot Locker, resulting in a 10% reduction in support tickets and increased customer satisfaction.
       Designed and executed deployment QA process at Bed Bath & Beyond to improve audience targeting for marketing emails, leading to a 15% increase in click-through rates. Developed and implemented innovative portal functionalities for Clean Earth Harsco's Connect Plus project, integrating APIs and managing state with Redux, resulting in a 20% increase in user engagement metrics.`,
    icon: React.createElement(FaReact),
    date: "01-2022 -to- 03-2023",
  },
  {
    title: "Plans2pick",
    location: "Frontend Devloper",
    description: `Created SEO-friendly landing pages using React & Redux, seamlessly integrating a 3rd party Payment Aggregator for smooth transactions.
      Transformed Figma designs into responsive web pages and developed user and vendor flows for KYC verification using React.
      Integrated APIs built on Node.js and Java with React frontend, while also developing and implementing a new mobile booking app feature that boosted user engagement by 40% and increased bookings by 15% in the first month.`,
    icon: React.createElement(FaReact),
    date: "07-2020 -to- 12-2021",
  },
  {
    title: "BYJU's",
    location: "Software Engineer",
    description: `Specialises in developing and maintaining internal tools for the Order Management System (OMS) within the organization's educational vertical.
      Collaborated with developers and the product management team to assess project outcomes and prioritize app features.
      Implementing 3rd party API (DTDC) for seamless delivery of the product using React, Redux, and Axios.`,
    icon: React.createElement(CgWorkAlt),
    date: `12-2019 -to- 07-2020`,
  },
  {
    title: "Thrillophilia",
    location: "Business Development Executive",
    description: `Increased sales for a travel company by 40% through implementing targeted marketing campaigns and strategic partnerships, resulting in a revenue growth of 80 Lakhs.
      Led negotiations with major hotel chains and airlines to secure exclusive discounts for customers, resulting in a 30% increase in booking conversions.
      Utilized data analysis to identify key market trends and customer preferences, leading to the development of personalized travel packages that generated a 25% increase in customer retention rates.`,
    icon: React.createElement(CgWorkAlt),
    date: `03-2019 -to- 12-2019`,
  },
  {
    title: "Teleperformance",
    location: "Tech Support Associate",
    description: `Establish clear communication channels with sellers to understand and address concerns regarding bugs on their listing pages.
      Utilize internal tools provided by the e-commerce platform to diagnose and resolve bugs efficiently.
      Take ownership of raising tickets on behalf of sellers, providing detailed information, and prioritizing based on severity for timely resolution by captive teams.`,
    icon: React.createElement(CgWorkAlt),
    date: "05-2018 -to- 02-2019",
  },
] as const;

export const projectsData = [
  {
    title: "streaming Platform",
    description:
      "I was working on personal project, leveraging React's reducers, context API, and TypeScript for efficient state management and enhanced developer productivity.",
    tags: ["React", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Three.js",
  "Git",
  "Tailwind",
  "Redux",
  "Redux RTK",
  "Java",
  "Framer Motion",
] as const;
