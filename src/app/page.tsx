import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, User, Mail } from "lucide-react"

export default function Home() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "C/C++",
        "JS/TS",
        "Java ",
        "Python",
        "SQL"
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "Redux",
        "Tailwind",
      ]
    },
    {
      title: "Java Stack",
      skills: [
        "Spring Boot",
        "Hibernate/JPA",
        "Maven/Gradle",
        "REST API's",
        "JUnit",
      ]
    },
    {
      title: "JavaScript/TypeScript Stack",
      skills: [
        "Node.js",
        "Next.js App Router",
        "Prisma ORM",
        "Express.js",
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "Kubernetes*",
        "AWS*",
        "CI/CD Pipelines",
      ]
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Oracle",
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git/GitHub",
        "GitLab",
        "VS Code/IntelliJ",
        "Postman",
        "Figma/Adobe XD",
        "Linux",
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-white hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="/services" className="text-white hover:text-purple-400 transition-colors">
                Services
              </Link>
              <Link href="/resume" className="text-white hover:text-purple-400 transition-colors">
                Resume
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Aryan Patel</h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-4">Software Developer</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate about creating innovative full-stack solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-purple-300 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-base px-4 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <User className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">About Me</h3>
                  <p className="text-gray-300">Learn more about my background and journey</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">Projects</h3>
                  <p className="text-gray-300">Explore my latest work and creations</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">Services</h3>
                  <p className="text-gray-300">What I can offer to your team</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                  <p className="text-gray-300">Let's discuss opportunities</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}