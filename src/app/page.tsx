import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, Github, ExternalLink,Home,MessageSquare,Menu, User, Mail,FileText, Zap, Cpu, Smartphone, Lock } from "lucide-react";
export default function Home() {
//   const skillCategories = [
//   {
//     title: "Core Languages",
//     skills: ["C/C++","Java", "Python", "JavaScript/TypeScript", "SQL", "Bash/Shell"]
//   },
//   {
//     title: "Java Full Stack",
//     skills: [
//       "Spring Boot (Microservices, REST APIs)", 
//       "Hibernate/JPA", 
//       "Maven/Gradle", 
//       "MySQL",
//       "Next.js /React"
//     ]
//   },
//   {
//     title: "MERN & Next.js",
//     skills: [
//       "MongoDB/PostgreSQL", 
//       "Express.js",
//       "React.js/Next.js", 
//       "Node.js", 
//       "Redux/TanStack Query"
//     ]
//   },
//   {
//     title: "Mobile (React Native)",
//     skills: [
//       "React Native (Expo)", 
//       "Firebase Integration", 
//       "Mobile State Management"
//     ]
//   },
//   { 
//     title: "DevOps & Cloud",
//     skills: [
//       "Docker/Kubernetes*", 
//       "AWS*", 
//       "CI/CD (GitHub Actions/GitLab)", 
//     ]
//   },
//   {
//     title: "Security & Hacking",
//     skills: [
//       "Kali Linux (Metasploit, Burp Suite)", 
//       "Penetration Testing/Nmap", 
//       "Ethical Hacking Fundamentals"
//     ]
//   },
//   {
//     title: "AI/ML & Data",
//     skills: [
//       "Python (Pandas, NumPy)", 
//       "TensorFlow/PyTorch*", 
//       "SQL", 
//     ]
//   },
// {
//     title: "Productivity & Office Tools",
//     skills: [
//       "MS Word ",
//       "Email",
//       "MS Excel Advanced",
//     ]
//   },
//   {
//     title: "Design",
//     skills: [
//       "App/Web Design",
//       "Figma/Adobe XD", 
//     ]
//   },
//   {
//     title: "Tools",
//     skills: [
//       "Git/GitLab/GitHub", 
//       "Postman", 
//       "VS Code/IntelliJ Idea", 
//       "Linux/CLI"
//     ]
//   }
// ];
 const skillCategories = [
    {
      title: "Core Technologies",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      skills: ["Java", "Python", "TypeScript", "C/C++", "SQL", "Bash"],
      color: "from-purple-500/10 to-purple-800/10"
    },
    {
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: ["Spring Boot", "Next.js", "Node.js", "Express", "Hibernate", "Redux"],
      color: "from-blue-500/10 to-blue-800/10"
    },
    {
      title: "Mobile & Cloud",
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      skills: ["React Native", "Firebase", "AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "from-emerald-500/10 to-emerald-800/10"
    },
    {
      title: "Specialized Skills",
      icon: <Lock className="w-6 h-6 text-amber-400" />,
      skills: ["Kali Linux", "Cybersecurity", "TensorFlow", "Data Analysis", "System Design"],
      color: "from-amber-500/10 to-amber-800/10"
    }
  ];
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tags: ["Next.js", "Spring Boot", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Health Monitoring App",
      description: "React Native application for real-time health data tracking with AI analysis",
      tags: ["React Native", "Firebase", "TensorFlow Lite", "Expo"],
      link: "#",
      github: "#"
    },
    {
      title: "DevOps Automation Suite",
      description: "CI/CD pipeline automation with Kubernetes cluster management",
      tags: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
      link: "#",
      github: "#"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Penetration testing results visualization tool with vulnerability tracking",
      tags: ["Python", "Django", "Kali Linux", "Nmap"],
      link: "#",
      github: "#"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
{/* Enhanced Navigation Bar */}
<nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50 border-b border-white/10">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center h-16">
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center group">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg mr-3 group-hover:rotate-12 transition-transform">
          <Code className="h-5 w-5 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
          Aryan Patel
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {[
          // { href: "/", label: "Home", icon: <Hom className="h-4 w-4 mr-2" /> },
          { href: "/about", label: "About", icon: <User className="h-4 w-4 mr-2" /> },
          { href: "/projects", label: "Projects", icon: <Code className="h-4 w-4 mr-2" /> },
          { href: "/services", label: "Services", icon: <Briefcase className="h-4 w-4 mr-2" /> },
          { href: "/resume", label: "Resume", icon: <FileText className="h-4 w-4 mr-2" /> },
        ].map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all group"
          >
            {item.icon}
            {item.label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-500 absolute bottom-1 left-4 right-4"></span>
          </Link>
        ))}
        <Link 
          href="/contact"
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all ml-2"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Contact
        </Link>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none">
        <Menu className="h-6 w-6" />
      </button>
    </div>
  </div>

  {/* Mobile Navigation (would need state to toggle) */}
  {/* <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-white/10">
          {link.label}
        </Link>
      ))}
    </div>
  </div> */}
</nav>

{/* Enhanced Hero Section */}
<section className="relative pt-40 pb-28 px-6 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/30 blur-[80px]"></div>
    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-900/20 blur-[100px]"></div>
  </div>

  <div className="container mx-auto text-center relative z-10">
    <div className="animate-fade-in-up space-y-6">
      {/* Title with gradient text and subtle shine */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2">
        <span className="bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent relative">
          Aryan Patel
          <span className="absolute inset-0 bg-white/10 rounded-full blur-md animate-pulse-slow"></span>
        </span>
      </h1>

      {/* Subtitle with animated underline */}
      <div className="inline-block relative">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-200 mb-1">
          Software Developer
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-width-pulse"></div>
      </div>

      {/* Description with animated typing effect */}
      <div className="max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl text-gray-300 mb-10 relative inline-block">
          <span className="relative">
            Passionate about creating innovative full-stack solutions
            <span className="absolute right-0 top-0 w-1 h-8 bg-purple-400 animate-blink"></span>
          </span>
        </p>
      </div>

      {/* Buttons with improved hover effects */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/projects">
          <Button 
            size="lg" 
            className="relative overflow-hidden group px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            <span className="relative z-10 flex items-center">
              View My Work 
              <ArrowRight className="ml-2 h-5 w-5 z-10 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
    <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-purple-400 rounded-full mt-2 animate-scroll-indicator"></div>
    </div>
  </div>
</section>

      {/* Skills Section */}
  <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 py-1.5 px-4 border-purple-400 text-purple-400">
              Technical Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive full-stack capabilities with focus on scalable architectures and cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`bg-gradient-to-b ${category.color} border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-2`}
              >
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4 pb-4">
                  <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-sm font-medium px-3 py-1.5 bg-white/5 text-gray-200 border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/skills">
              <Button 
                size="lg"
                className="relative overflow-hidden group px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <span className="relative z-10">Explore Full Skills Matrix</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
            <Badge variant="outline" className="mb-4 py-1.5 px-4 border-purple-400 text-purple-400">
              My Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Selected case studies demonstrating my technical capabilities and problem-solving approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
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
                      View Code
                    </Button>
                  </Link>
                  <Link href={project.link} target="_blank">
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
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
                className="relative overflow-hidden group px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <span className="relative z-10">View All Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-[100px]"></div>
    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-900/10 blur-[120px]"></div>
  </div>

  <div className="container mx-auto max-w-7xl relative z-10">
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-4 py-1.5 px-4 border-purple-400 text-purple-400">
        Explore
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Quick <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Navigation</span>
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
          color: "from-purple-600/20 to-purple-800/20"
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
          color: "from-amber-600/20 to-amber-800/20"
        }
      ].map((item, index) => (
        <Link href={item.href} key={index}>
          <Card className={`bg-gradient-to-br ${item.color} border border-white/10 hover:border-purple-400/50 transition-all duration-300 group h-full hover:-translate-y-2`}>
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex items-center text-purple-400 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
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