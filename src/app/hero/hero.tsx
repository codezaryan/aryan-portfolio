import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, Github, ExternalLink,  MessageSquare, Menu, User, Mail, FileText, Zap, Cpu, Smartphone, Lock, ChevronDown, Star, TrendingUp, Award } from "lucide-react";
export default function Hero() {

  const skillCategories = [
    {
      title: "Languages",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
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
      icon: <Code className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: "React/Next.js", level: "Advanced", proficiency: 88 },
        { name: "Node.js", level: "Advanced", proficiency: 82 },
        { name: "Express.js", level: "Advanced", proficiency: 80 },
        { name: "Spring Boot", level: "Professional", proficiency: 75 },
        { name: "React Native", level: "Intermidiate", proficiency: 60 },
      ],
      color: "from-purple-500/10 to-purple-800/10"
    },
    {
      title: "Tools & DevOps",
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      skills: [
        { name: "Version Control" , level: "Advanced", proficiency: 90 },
        { name: "CI/CD", level: "Intermediate", proficiency: 65 },
        { name: "Linux", level: "Advanced", proficiency: 80 },
        { name: "Docker", level: "Intermediate", proficiency: 75 },
        { name: "AWS", level: "Intermediate", proficiency: 70 },
        { name: "Kubernetes", level: "Beginner", proficiency: 50 },
      ],
      color: "from-emerald-500/10 to-emerald-800/10"
    }
  ];
  const projects = [
    {
      title: "ReserveTable",
      description: "Full-stack restaurant booking platform with Google Maps integration and real-time confirmations. Built with Next.js, PostgreSQL, and modern UI/UX principles.",
      tags: ["Next.js", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
      link: "https://restaurant-nextjs-orpin.vercel.app/",
      github: "https://github.com/codezaryan/restaurant-booking",
      problem: "Solved the challenge of fragmented restaurant discovery and booking processes by creating a unified platform with real-time availability and seamless user experience.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Employee Management System",
      description: "Spring Boot backend with Next.js frontend for comprehensive employee data management, featuring advanced search, filtering, and reporting capabilities.",
      tags: ["Spring Boot","MySQL","Next.js"],
      link: "https://codezaryan/not-deployed-yet",
      github: "https://github.com/codezaryan/spring-next",
      problem: "Streamlined HR operations and employee data management processes through a robust full-stack application with advanced data handling capabilities.",
      image: "/api/placeholder/400/300"
    }
  ];


  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/30 blur-[80px]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-900/20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up space-y-6">
            {/* Title with gradient text and subtle shine */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent relative">
                Aryan Patel
                <span className="absolute inset-0 bg-white/10 rounded-full blur-md animate-pulse-slow"></span>
              </span>
            </h1>

            {/* Subtitle with animated underline */}
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-1">
                Software Developer
              </h2>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-width-pulse"></div>
            </div>

         {/* Description with animated typing effect */}
            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-10 text-center">
                <span className="relative inline-flex items-end whitespace-nowrap">
                  I build scalable full-stack solutions
                  <span className="ml-1 h-[1.4em] w-[2px] bg-blue-400 animate-blink" />
                </span>
              </p>
            </div>


            {/* Buttons with improved hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="relative overflow-hidden group px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 z-10 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all group"
                >
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute pt-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <ChevronDown className="w-4 h-4 text-blue-400 animate-scroll-indicator" />
          </div>
        </div>
      </section>
    </>
  )
}
