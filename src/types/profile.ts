export interface SocialLink {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  brand: string;
  designation: string;
  secondaryTitle: string;
  education: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
  email: string;
  location: string;
  githubUrl: string;
  socialLinks: SocialLink[];
}

