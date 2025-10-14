"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "ReserveTable",
      description:
        "Full-stack web application inspired by OpenTable, allowing users to browse restaurants, book tables, and receive real-time confirmations with Google Maps integration.",
      problem: "Solved the challenge of fragmented restaurant discovery and booking processes by creating a unified platform with real-time availability and seamless user experience.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
      liveUrl: "https://restaurant-nextjs-orpin.vercel.app/",
      githubUrl: "https://github.com/codezaryan/restaurant-booking",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Manager",
      description:
        "Task management app with real-time tracking features, deadline notifications, secure JWT authentication, and role-based access control.",
      problem: "Addressed the need for efficient team collaboration and project tracking by building a scalable task management solution with real-time synchronization.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "MongoDB", "JWT", "Real-time Updates"],
      liveUrl: "https://full-stack-work-manager-2.vercel.app/",
      githubUrl: "https://github.com/codezaryan/full-stack-work-manager-2",
      featured: false,
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Employee Management System",
      description:
        "Spring Boot backend with Next.js frontend for comprehensive employee data management, featuring advanced search, filtering, and reporting capabilities.",
      problem: "Streamlined HR operations and employee data management processes through a robust full-stack application with advanced data handling capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["Spring Boot","MySQL","Next.js"],
      liveUrl: "https://codezaryan/not-deployed-yet",
      githubUrl: "https://github.com/codezaryan/spring-next",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 4,
      title: "Cybersecurity Dashboard",
      description: "Penetration testing results visualization tool with vulnerability tracking and automated reporting. Built with Python and modern web technologies.",
      problem: "Improved security assessment workflows and vulnerability management by creating an intuitive dashboard for penetration testing results and automated reporting.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "Django", "Kali Linux", "Nmap"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Security"
    }
  ]

  const categories = ["All", ...new Set(projects.map(project => project.category))]
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            A showcase of my technical skills and creative problem-solving through various projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  : "border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              } transition-all`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {filter === "All" && (
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
                      <p className="text-blue-400 text-sm font-medium mb-3">{project.problem}</p>
                      <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-600/20 text-blue-300 border-blue-500/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link href={project.liveUrl} target="_blank">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
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
        )}

        {/* All Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">
            {filter === "All" ? "All Projects" : `${filter} Projects`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-sm font-medium mb-2">View Project</p>
                      <div className="flex gap-2 justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                        <Github className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-2 line-clamp-2">{project.problem}</p>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-blue-600/20 text-blue-300 border-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={project.liveUrl} target="_blank">
                      <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
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
