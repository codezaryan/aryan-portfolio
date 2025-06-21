import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ReserveTable",
      description:
        "Full-stack web application inspired by OpenTable, allowing users to browse restaurants, book tables, and receive real-time confirmations with Google Maps integration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aryanpatel7987/reservetable",
      featured: true,
    },
    {
      id: 2,
      title: "Task Manager",
      description:
        "Task management app with real-time tracking features, deadline notifications, secure JWT authentication, and role-based access control.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "MongoDB", "JWT", "Real-time Updates"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aryanpatel7987/task-manager",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and achievements with responsive design and fast load times.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aryanpatel7987/portfolio",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            A showcase of my technical skills and creative problem-solving through various projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={project.id}
                  className="bg-white/10 border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 border-purple-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link href={project.liveUrl} target="_blank">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                      <Link href={project.githubUrl} target="_blank">
                        <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-white/10 border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-purple-600/20 text-purple-300 border-purple-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={project.liveUrl} target="_blank">
                      <Button size="sm" className="text-xs bg-purple-600 hover:bg-purple-700">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </Link>
                    <Link href={project.githubUrl} target="_blank">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-white/30 text-white hover:bg-white/10"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
