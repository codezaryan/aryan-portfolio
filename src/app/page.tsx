import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, Github, ExternalLink,  MessageSquare, Menu, User, Mail, FileText, Zap, Cpu, Smartphone, Lock, ChevronDown, Star, TrendingUp, Award } from "lucide-react";
export default function Home() {

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <ChevronDown className="w-4 h-4 text-blue-400 animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 py-1.5 px-4 border-blue-400 text-blue-400">
              Technical Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive full-stack capabilities with focus on scalable architectures and cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-b ${category.color} border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-2 animate-stagger`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4 pb-4">
                  <div className="p-3 rounded-lg bg-black/20 border border-white/10 group-hover:bg-blue-600/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            skill.level === 'Advanced' ? 'bg-green-500/20 text-green-300' :
                            skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/about">
              <Button
                size="lg"
                className="relative overflow-hidden group px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <span className="relative z-10">Explore Full Skills Matrix</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ArrowRight className="ml-2 h-5 w-5 z-10" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 py-1.5 px-4 border-blue-400 text-blue-400">
              My Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Selected case studies demonstrating my technical capabilities and problem-solving approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group hover:-translate-y-2 hover:rotate-1 animate-stagger overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Code className="w-16 h-16 text-blue-400/50" />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-sm font-medium mb-2">View Project</p>
                      <div className="flex gap-2 justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                        <Github className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">{project.problem}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs font-mono px-3 py-1 bg-white/5 text-gray-200 border-white/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={project.github} target="_blank">
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </Link>
                  <Link href={project.link} target="_blank">
                    <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="relative overflow-hidden group px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <span className="relative z-10">View All Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ArrowRight className="ml-2 h-5 w-5 z-10" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Enhanced Quick Links Section */}
      <section className="py-24 px-6 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/20 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-900/10 blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 py-1.5 px-4 border-blue-400 text-blue-400">
              Explore
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quick <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Navigation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover more about my professional journey and offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                href: "/about",
                icon: <User className="h-8 w-8" />,
                title: "About Me",
                description: "My background and professional journey",
                color: "from-pink-600/20 to-green-800/20"
              },
              {
                href: "/projects",
                icon: <Code className="h-8 w-8" />,
                title: "Projects",
                description: "Explore my portfolio and case studies",
                color: "from-blue-600/20 to-blue-800/20"
              },
              {
                href: "/services",
                icon: <Briefcase className="h-8 w-8" />,
                title: "Services",
                description: "What I can offer your organization",
                color: "from-emerald-600/20 to-emerald-800/20"
              },
              {
                href: "/contact",
                icon: <Mail className="h-8 w-8" />,
                title: "Contact",
                description: "Let's discuss opportunities",
                color: "from-purple-600/20 to-white-800/20"
              }
            ].map((item, index) => (
              <Link href={item.href} key={index}>
                <Card className={`bg-gradient-to-br ${item.color} border border-white/10 hover:border-blue-400/50 transition-all duration-300 group h-full hover:-translate-y-2 animate-stagger`}
                      style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex items-center text-blue-400 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="mr-2">Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
