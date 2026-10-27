import { Profile, SocialLink } from "@/types/profile";

export type { Profile, SocialLink };

export const profile: Profile = {
  name: "Md Nazmul Hosen",
  brand: "Nazmul.dev",
  designation: "Frontend Developer",
  secondaryTitle: "Problem Solver",
  education: "Diploma in Computer Science & Technology",
  bio: "Frontend Developer and Problem Solver specializing in building performant, responsive, and visually modern web applications using React, Next.js, and TypeScript.",
  profileImage: "/images/Profile_pic.png",
  resumeUrl: "wo", // Editable: Path or link to your resume (e.g. "/resume.pdf")
  email: "ytnazmul535@gmail.com", // Editable: Your contact email (e.g. "contact@nazmul.dev")
  location: "Bangladesh",
  githubUrl: "https://github.com/Nazmul-07",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Nazmul-07",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/nazmulhosen07", // Editable
    },
    {
      name: "Twitter",
      url: "www.twitter.com/nazmul-07", // Editable
    },
    {
      name: "Email",
      url: "ytnazmul535@gmail.com", // Editable
    },
  ],
};
