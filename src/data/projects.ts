import { Project } from "@/types/project";

export type { Project };

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    title: "BazarDor - বাজার দর",
    description:
      "A Bangladeshi market price tracking platform where users can explore daily essential product prices and browse categories in one place.",

    image: "/images/projects/bazardor.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "REST API",
    ],

    liveUrl: "https://bazar-dor-one-theta.vercel.app/",
    githubUrl: "https://github.com/Nazmul-07/BazarDor",

    features: [
      "Dynamic product and category browsing",
      "Real-time API-based product information",
      "Bengali price formatting",
      "Bengali numeral-based price sorting",
      "User authentication with Better Auth",
      "Protected profile and update information",
      "Responsive design with loading skeletons",
    ],

    challenges: [
      "Integrating external product and category APIs",
      "Handling Bengali numerals in numeric price sorting",
      "Implementing secure authentication and protected routes",
      "Managing dynamic routes and API error handling",
    ],

    futurePlans: [
      "Add market-wise price comparison",
      "Track historical product price changes",
      "Add price drop notifications",
      "Introduce product search and advanced filters",
      "Add user favorite products",
    ],
  },

  {
    slug: "fit-log",
    title: "Fit-Log",
    description:
      "A workout tracking application to organize exercises and monitor workout plans.",
    image: "/images/projects/fit-log.png",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],

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
    image: "/images/projects/bangla-news.png",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "News API"],

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
