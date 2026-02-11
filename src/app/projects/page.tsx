"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { projects as projectsData } from "@/lib/config"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const projects = projectsData.map((project, index) => ({
    ...project,
    id: index + 1,
    featured: index < 2, // First two are featured
    category: "Full-Stack" // All are full-stack for now
  }))

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
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      y: -8,
                      rotateY: 5,
                      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
                    }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="bg-white/10 border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                          variants={overlayVariants}
                          initial="hidden"
                          whileHover="visible"
                        />
                      </div>
                      <CardContent className="p-6">
                        <motion.h3
                          className="text-xl font-bold text-white mb-3"
                          whileHover={{ color: "#60a5fa" }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-blue-400 text-sm font-medium mb-3">{project.problem}</p>
                        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tech) => (
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
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link href={project.liveUrl} target="_blank">
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link href={project.githubUrl} target="_blank">
                              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </Link>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
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
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center"
                      variants={overlayVariants}
                      initial="hidden"
                      whileHover="visible"
                    >
                      <div className="text-center">
                        <p className="text-white text-sm font-medium mb-2">View Project</p>
                        <div className="flex gap-2 justify-center">
                          <ExternalLink className="w-5 h-5 text-white" />
                          <Github className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <CardContent className="p-4">
                    <motion.h3
                      className="text-lg font-bold text-white mb-2"
                      whileHover={{ color: "#60a5fa" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-blue-400 text-sm font-medium mb-2 line-clamp-2">{project.problem}</p>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tech) => (
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
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
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
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
