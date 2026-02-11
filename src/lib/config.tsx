import { IconType, TimelineItem, ExperienceItem, EducationItem, ResumeData, SkillCategory, Project } from './types';

export const siteConfig = {
  name: "Aryan Patel",
  title: "Full-Stack Developer",
  description: "Full-Stack Developer specializing in building scalable web systems using React, Next.js, and Node.js. Expert in modern web technologies and cloud solutions.",
  keywords: [
    "Aryan Patel",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "MERN Stack",
    "Web Development",
    "Software Engineer"
  ],
  url: "https://codezaryan.netlify.app",
  ogImage: "/og-image.jpg",
  twitterHandle: "@codezaryan",
  email: "aryanpatel7987@gmail.com",
  phone: "+91-7987419262",
  location: "Bengaluru, India",
  github: "https://github.com/aryanpatel7987",
  linkedin: "https://linkedin.com/in/aryanpatel7987",
  resumePath: "/assets/Aryan_Patel_Updated_Resume.pdf"
};

import { Cpu, Code, Zap } from 'lucide-react';

export const colorPalette = {
  primary: "#3b82f6", // blue-500
  secondary: "#8b5cf6", // purple-500
  accent: "#06b6d4", // cyan-500
  background: "from-slate-900 via-purple-900 to-slate-900",
  cardBg: "from-slate-800/50 to-slate-900/50",
  textPrimary: "#ffffff",
  textSecondary: "#d1d5db", // gray-300
  border: "#ffffff20" // white/20
};

export const skillCategories = [
  {
    title: "Languages",
    icon: <Cpu className="h-6 w-6 text-white" />,
    skills: [
      { name: "Java", level: "Advanced", proficiency: 90 },
      { name: "Python", level: "Advanced", proficiency: 85 },
      { name: "TypeScript", level: "Advanced", proficiency: 88 },
      { name: "C/C++", level: "Advanced", proficiency: 75 },
      { name: "SQL", level: "Advanced", proficiency: 85 },
      { name: "Linux/Bash", level: "Advanced", proficiency: 80 }
    ],
    color: "from-blue-500/10 to-blue-800/10"
  },
  {
    title: "Frameworks & Libraries",
    icon: <Code className="h-6 w-6 text-white" />,
    skills: [
      { name: "React/Next.js", level: "Advanced", proficiency: 88 },
      { name: "Node.js", level: "Advanced", proficiency: 82 },
      { name: "Express.js", level: "Advanced", proficiency: 80 },
      { name: "Spring Boot", level: "Professional", proficiency: 75 },
      { name: "React Native", level: "Intermediate", proficiency: 60 },
    ],
    color: "from-purple-500/10 to-purple-800/10"
  },
  {
    title: "Tools & DevOps",
    icon: <Zap className="h-6 w-6 text-white" />,
    skills: [
      { name: "Version Control", level: "Advanced", proficiency: 90 },
      { name: "CI/CD", level: "Intermediate", proficiency: 65 },
      { name: "Linux", level: "Advanced", proficiency: 80 },
      { name: "Docker", level: "Intermediate", proficiency: 75 },
      { name: "AWS", level: "Intermediate", proficiency: 70 },
      { name: "Kubernetes", level: "Beginner", proficiency: 50 },
    ],
    color: "from-emerald-500/10 to-emerald-800/10"
  }
];

export const projects = [
  {
    title: "ReserveTable",
    description: "Full-stack restaurant booking platform with Google Maps integration and real-time confirmations. Built with Next.js, PostgreSQL, and modern UI/UX principles.",
    tags: ["Next.js", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
    liveUrl: "https://restaurant-nextjs-orpin.vercel.app/",
    githubUrl: "https://github.com/codezaryan/restaurant-booking",
    problem: "Solved the challenge of fragmented restaurant discovery and booking processes by creating a unified platform with real-time availability and seamless user experience.",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Employee Management System",
    description: "Spring Boot backend with Next.js frontend for comprehensive employee data management, featuring advanced search, filtering, and reporting capabilities.",
    tags: ["Spring Boot","MySQL","Next.js"],
    liveUrl: "https://codezaryan/not-deployed-yet",
    githubUrl: "https://github.com/codezaryan/spring-next",
    problem: "Streamlined HR operations and employee data management processes through a robust full-stack application with advanced data handling capabilities.",
    image: "/api/placeholder/400/300"
  }
];

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export const quickLinks = [
  {
    href: "/about",
    icon: "User",
    title: "About Me",
    description: "My background and professional journey",
    color: "from-pink-600/20 to-green-800/20"
  },
  {
    href: "/projects",
    icon: "Code",
    title: "Projects",
    description: "Explore my portfolio and case studies",
    color: "from-blue-600/20 to-blue-800/20"
  },
  {
    href: "/services",
    icon: "Briefcase",
    title: "Services",
    description: "What I can offer your organization",
    color: "from-emerald-600/20 to-emerald-800/20"
  },
  {
    href: "/contact",
    icon: "Mail",
    title: "Contact",
    description: "Let's discuss opportunities",
    color: "from-purple-600/20 to-white-800/20"
  }
];

export const contactInfo = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  location: siteConfig.location,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  opportunities: [
    "Mobile/Desktop Application Development",
    "Website Development",
    "AI/ML Projects",
    "Ethical Hacking"
  ]
};

export const aboutData = {
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Oriental Institute of Science and Technology, Jabalpur",
      year: "2020 - 2024",
      gpa: "CGPA: 8.12/10.0",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "MP Board, Bhopal",
      year: "2018 - 2020",
      gpa: "Percentage: 84.4%",
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "MP Board, Bhopal",
      year: "2016 - 2018",
      gpa: "Percentage: 86.6%",
    }
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Demonstrated knowledge of AWS Cloud concepts, services, and terminology."
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023",
      description: "Certified in designing and planning cloud solution architecture."
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      description: "Proficient in Kubernetes cluster administration and management."
    }
  ]
};

export const servicesData = [
  {
    icon: "Globe",
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern technologies like Next.js, React, Node.js, and databases.",
    skills: ["Next.js", "React", "Node.js", "Spring Boot", "MySQL", "Web UI/UX"],
    deliverables: ["Responsive web applications", "RESTful APIs", "Database design", "Deployment & hosting"],
    color: "from-blue-600/20 to-blue-900/20"
  },
  {
    icon: "Server",
    title: "API Design & Development",
    description: "Robust API development and third-party service integrations for seamless connectivity.",
    skills: ["REST APIs", "GraphQL", "Microservices", "API Security"],
    deliverables: ["RESTful APIs", "API documentation", "Third-party integrations", "API testing"],
    color: "from-purple-600/20 to-purple-900/20"
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native and modern mobile development practices.",
    skills: ["React Native", "TypeScript", "Spring Boot", "MySQL", "Mobile UI/UX"],
    deliverables: ["iOS & Android apps", "App store deployment", "Push notifications", "Offline functionality"],
    color: "from-emerald-600/20 to-emerald-900/20"
  },
  {
    icon: "Cloud",
    title: "Cloud Deployment & DevOps",
    description: "Efficient cloud deployment and DevOps practices for scalable and reliable applications.",
    skills: ["Docker/Kubernetes", "AWS", "CI/CD (GitHub Actions/GitLab)", "Cloud Architecture"],
    deliverables: ["Cloud deployment", "CI/CD pipelines", "Infrastructure as Code", "Monitoring & logging"],
    color: "from-amber-600/20 to-amber-900/20"
  }
];



export const resumeData: ResumeData = {
  experience: [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developing end-to-end web applications using modern technologies. Specializing in React, Next.js, Node.js, and Spring Boot.",
      technologies: ["React", "Next.js", "Node.js", "Spring Boot", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Software Development Intern",
      company: "Various Projects",
      period: "2022 - 2023",
      description: "Worked on multiple software development projects, gaining experience in full-stack development and agile methodologies.",
      technologies: ["Java", "JavaScript", "MySQL", "Git"]
    }
  ],
  certifications: [
    "Python Certificate - GUVI and Google for Education",
    "AI For India 2.0 - GUVI and Skill India",
    "SQL (Basic) Certificate - HackerRank",
    "4 Star in Java Problem-solving - HackerRank"
  ],
  skills: [
    "Java", "Python", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Spring Boot", "PostgreSQL", "MongoDB", "Git", "Docker"
  ]
};

export const timelineData: TimelineItem[] = [
  {
    title: "Birth • 20 Aug 2002",
    type: "life",
    event: "Born in Vijayraghavgarh, Katni, Madhya Pradesh, India."
  },
  {
    title: "Early Academic Foundation • 2005",
    type: "education",
    event: "Entered formal education at the age of three, developing early cognitive discipline and structured learning habits."
  },
  {
    title: "Primary Academic Progression • 2008",
    type: "education",
    event: "Completed kindergarten and formally transitioned into primary education with strong foundational competencies."
  },
  {
    title: "Secondary & Senior Secondary Education • 2008 – 2020",
    type: "education",
    event: "Completed schooling through Class 12, establishing advanced proficiency in mathematics, logical reasoning, and core scientific principles."
  },
  {
    title: "Undergraduate Engineering Degree • 2020 – 2024",
    type: "education",
    event: "Completed Bachelor of Technology in Computer Science Engineering, acquiring formal expertise in algorithms, data structures, databases, operating systems, computer networks, and software engineering methodologies."
  },
  {
    title: "Advanced Professional Preparation • 2024",
    type: "life",
    event: "Engaged in structured upskilling in full-stack development, software architecture, version control workflows, and system scalability through project-driven learning."
  },
  {
    title: "Industry Appointment • 2025",
    type: "award",
    event: "Joined Peerme Software Technology Pvt. Ltd., Bangalore as a Full-Stack Software Developer, contributing to enterprise-grade applications and high-availability web platforms."
  },
  {
    title: "Current Engineering Focus • 2026",
    type: "code",
    event: "Actively specializing in modern JavaScript frameworks, backend architecture, performance optimization, cloud-native deployment, and scalable system design."
  }
];
