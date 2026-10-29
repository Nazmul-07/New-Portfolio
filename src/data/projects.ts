import { Project } from "@/types/project";

export type { Project };

export const projects: Project[] = [
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    description:
      "An AI-powered platform to create and improve professional resumes.",
    image: "/projects/resume-builder.png",

    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "AI API",
    ],

    liveUrl: "",
    githubUrl: "",

    features: [
      "User authentication",
      "Create and edit resumes",
      "AI-powered content enhancement",
      "Multiple resume templates",
    ],

    challenges: [
      "Integrating the AI API",
      "Managing authentication and resume data",
    ],

    futurePlans: [
      "Add more resume templates",
      "Improve PDF export",
      "Add more customization options",
    ],
  },

  {
    slug: "fit-log",
    title: "Fit-Log",
    description:
      "A workout tracking application to organize exercises and monitor workout plans.",
    image: "/projects/fit-log.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
    ],

    liveUrl: "https://fit-log-dun-six.vercel.app/",
    githubUrl: "https://github.com/Nazmul-07/Fit-Log",

    features: [
      "Browse workout exercises",
      "Create a workout plan",
      "Save favorite workouts",
      "Track completed exercises",
    ],

    challenges: [
      "Managing workout and saved-item state",
      "Building a responsive workout interface",
    ],

    futurePlans: [
      "Add workout history",
      "Add user accounts",
      "Introduce progress charts",
    ],
  },

  {
    slug: "bangla-news-portal",
    title: "Bangla News Portal",
    description:
      "A Bengali news portal for browsing news categories and headlines.",
    image: "/projects/bangla-news.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "News API",
    ],

    liveUrl: "https://bangla-news-24-umber.vercel.app/",
    githubUrl: "https://github.com/Nazmul-07/Bangla-News-24",

    features: [
      "Browse news categories",
      "Display news headlines",
      "Bengali typography",
      "Responsive layout",
    ],

    challenges: [
      "Fetching and displaying API data",
      "Handling Bengali fonts and text layout",
    ],

    futurePlans: [
      "Add article details pages",
      "Improve search functionality",
      "Add saved articles",
    ],
  },
];
