"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin,Globe, Github, Linkedin, Trophy, Code, Briefcase, GraduationCap, Award } from "lucide-react"
import DownloadResume from "../components/DownloadResume"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const experience = [
    {
      title: "Web Developer Intern",
      company: "IKSC Knowledge Bridge Pvt. Ltd., Pune",
      period: "July 2024 – June 2025",
      achievements: [
        "Built responsive web applications using React.js/Next.js frontend with Node.js backend, improving user engagement by 25% through dynamic UI components and state management",
        "Reduced API response times by 30% through query optimization and caching",
        "Implemented JWT authentication with role-based access control (RBAC) and encrypted password storage using bcrypt",
        "Developed RESTful APIs with Node.js HTTP module, following MVC architecture and documenting endpoints with Postman",
        "Utilized MongoDB for NoSQL data storage and MySQL/PostgreSQL for relational database storage"
      ]
    }
  ]

  const projects = [
    {
      title: "ReserveTable - Restaurant Booking Platform",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Google Maps API"],
      achievements: [
        "Developed end-to-end booking system with real-time table availability checks and admin dashboard",
        "Improved load times by 35% through query optimization and React.memo implementation",
        "Integrated Stripe payment gateway and Google Maps API for location services",
        "Achieved 90% test coverage using Jest and React Testing Library"
      ]
    },
    {
      title: "User Management System",
      technologies: ["Spring Boot", "React.js", "JWT", "MySQL"],
      achievements: [
        "Implemented secure JWT tokens with password encryption",
        "Built REST APIs for comprehensive user management operations",
        "Utilized React Context API for efficient state handling"
      ]
    }
  ]

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript/TypeScript", "SQL", "Python"]
    },
    {
      category: "Frontend Development",
      skills: ["Tailwind CSS", "React.js", "Next.js", "Redux"]
    },
    {
      category: "Backend Development",
      skills: ["Spring Boot", "REST APIs", "JWT Authentication", "Node.js"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git/GitLab", "CI/CD", "Postman", "Docker", "Linux"]
    },
    {
      category: "Methodologies",
      skills: ["Agile Development", "Microservices", "Test-Driven Development"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Oriental Institute of Science and Technology, Jabalpur",
      period: "2020 - 2024",
      details: "CGPA: 8.12/10.0"
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "MP Board, Bhopal",
      period: "2018 - 2020",
      details: "Percentage: 84.4%"
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "MP Board, Bhopal",
      period: "2016 - 2018",
      details: "Percentage: 86.6%"
    }
  ]

  const certifications = [
    "Spring Framework Masterclass – Spring Boot, MVC, REST APIs (Udemy, 2025)",
    "SQL Certification (HackerRank, 2025)",
    "Achieved 4-Star in Java Programming problems on HackerRank (2025)"
  ]

  const achievements = [
    "Top 3 in B.Tech, 12th, and 10th with securing A+ Grade",
    "Achieved 4-Star rating in Java problem-solving on HackerRank"
  ]

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Resume
          </motion.h1>
          <DownloadResume />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <motion.h2
                  className="text-3xl font-bold text-white mb-2"
                  whileHover={{ color: "#60a5fa" }}
                  transition={{ duration: 0.2 }}
                >
                  Aryan Patel
                </motion.h2>
                <p className="text-xl text-blue-300">Full-Stack Developer</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <motion.div
                  className="flex items-center justify-center text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  +91-7987419262
                </motion.div>
                <motion.div
                  className="flex items-center justify-center text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  Bengaluru, India
                </motion.div>
                <motion.div
                  className="flex items-center justify-center text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Globe className="w-4 h-4 mr-2 text-blue-400" />
                  codezaryan.netlify.app
                </motion.div>
                <motion.div
                  className="flex items-center justify-center text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  aryanpatel7987@gmail.com
                </motion.div>
                <motion.div
                  className="flex items-center justify-center text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="w-4 h-4 mr-2 text-blue-400" />
                  github.com/aryanpatel7987
                </motion.div>
                <motion.div
                  className="flex items-center justify-center text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="w-4 h-4 mr-2 text-blue-400" />
                  linkedin.com/in/aryanpatel7987
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-3 h-6 w-6 text-blue-400" />
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Full-Stack Developer with hands-on experience in building scalable web applications using modern technologies.
                Skilled in Java, Spring Boot, and React.js/Next.js with a strong focus on creating efficient RESTful APIs,
                optimizing database performance, and delivering responsive user interfaces. Passionate about clean code
                architecture and implementing best practices in software development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-blue-400" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalSkills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-white/5 text-gray-200 border-white/10 hover:bg-white/10"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-blue-400" />
                Professional Experience
              </h3>
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-8 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
                    <div className="text-blue-300">{exp.period}</div>
                  </div>
                  <h5 className="text-md font-medium text-gray-300 mb-3">{exp.title}</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (idx * 0.1), duration: 0.4 }}
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-blue-400" />
                Key Projects
              </h3>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-blue-400 pl-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-blue-600/20 text-blue-300 border-blue-500/30"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="text-gray-300 flex items-start"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (index * 0.3) + (idx * 0.1), duration: 0.4 }}
                        >
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-blue-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-blue-400 pl-6 pb-6 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                  >
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-blue-300">{edu.institution}</p>
                    <p className="text-gray-400">{edu.period}</p>
                    <p className="text-gray-300">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Trophy className="mr-3 h-6 w-6 text-blue-400" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 h-6 w-6 text-blue-400" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((certification, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{certification}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
