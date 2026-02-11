import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, User, Mail, Code } from "lucide-react";
import Hero1 from "./hero/hero1";
import { skillCategories, projects } from "@/lib/config";
import { SkillCard } from "@/components/home/SkillCard";
import { ProjectCard } from "@/components/home/ProjectCard";
import ChatBot from "@/components/chatbot/ChatBot";

export default function Home() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Hero Section */}
       <Hero1/>

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
              <SkillCard key={index} category={category} index={index} />
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
              <ProjectCard key={index} project={project} index={index} />
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
