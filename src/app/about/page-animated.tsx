"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code2, Brain, Trophy, Cpu, Smartphone, Lock, Database, Server, LayoutTemplate, Settings, Camera } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
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

  const education = [
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
  ]

  const certifications = [
    "Python Certificate - GUVI and Google for Education",
    "AI For India 2.0 - GUVI and Skill India",
    "SQL (Basic) Certificate - HackerRank",
    "4 Star in Java Problem-solving - HackerRank",
  ]

  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["C/C++", "Java", "Python", "JavaScript/TypeScript", "SQL", "Bash/Shell"],
      color: "from-blue-600/20 to-blue-900/20"
    },
    {
      title: "Java Full Stack",
      icon: <Server className="w-5 h-5" />,
      skills: [
        "Spring Boot (Microservices, REST APIs)",
        "Hibernate/JPA",
        "Maven/Gradle",
        "MySQL",
        "Next.js /React"
      ],
      color: "from-purple-600/20 to-purple-900/20"
    },
    {
      title: "MERN & Next.js",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "MongoDB/PostgreSQL",
        "Express.js",
        "React.js/Next.js",
        "Node.js",
        "Redux/TanStack Query"
      ],
      color: "from-emerald-600/20 to-emerald-900/20"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-5 h-5" />,
      skills: [
        "React Native (Expo)",
        "Firebase Integration",
        "Mobile State Management"
      ],
      color: "from-amber-600/20 to-amber-900/20"
    },
    {
      title: "DevOps & Cloud",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        "Docker/Kubernetes",
        "AWS",
        "CI/CD (GitHub Actions/GitLab)",
      ],
      color: "from-red-600/20 to-red-900/20"
    },
    {
      title: "Security",
      icon: <Lock className="w-5 h-5" />,
      skills: [
        "Kali Linux ",
        "Penetration Testing",
        "Ethical Hacking Fundamentals"
      ],
      color: "from-violet-600/20 to-violet-900/20"
    }
  ]

  const additionalSkills = [
    {
      title: "AI/ML & Data",
      skills: ["Python (Pandas, NumPy)", "TensorFlow/PyTorch", "SQL"]
    },
    {
      title: "Productivity Tools",
      skills: ["MS Word", "Email", "MS Excel Advanced"]
    },
    {
      title: "Design",
      skills: ["App/Web Design", "Figma/Adobe XD"]
    },
    {
      title: "Development Tools",
      skills: ["Git/GitLab/GitHub", "Postman", "VS Code/IntelliJ Idea", "Linux/CLI"]
    }
  ]

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
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
            About Me
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack developer with expertise in modern web technologies and a passion for building scalable solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-blue-400" />
                  My Journey
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My coding journey began during my college years when I discovered the power of technology to solve real-world problems. What started as curiosity about how websites work evolved into a deep passion for full-stack development.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I love building systems that not only function flawlessly but also provide exceptional user experiences. Whether it's creating RESTful APIs with Spring Boot, crafting responsive UIs with React and Next.js, or optimizing database performance, I approach each challenge with enthusiasm and attention to detail.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My goal is to continue growing as a developer while contributing to projects that make a meaningful impact. I'm particularly interested in scalable architectures, cloud technologies, and emerging web standards that push the boundaries of what's possible on the web.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Camera className="mr-3 h-6 w-6 text-blue-400" />
                  Professional Profile
                </h2>
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-6xl font-bold text-white">AP</span>
                  </motion.div>
                  <p className="text-gray-300 text-center leading-relaxed">
                    Dedicated full-stack developer with a proven track record of delivering high-quality software solutions.
                    Committed to continuous learning and staying at the forefront of technology trends.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-blue-400" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-blue-400 pl-6 pb-6 last:pb-0"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-purple-300">{edu.institution}</p>
                    <p className="text-gray-400">{edu.year}</p>
                    <p className="text-gray-300">{edu.gpa}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-white mb-8 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${category.color} border-white/20`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="p-2 bg-white/10 rounded-lg mr-3 border border-white/10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Additional Skills */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <LayoutTemplate className="mr-3 h-6 w-6 text-blue-400" />
                  Additional Skills
                </h2>
                <div className="space-y-6">
                  {additionalSkills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-3">{skillGroup.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
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

          {/* Certifications */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Trophy className="mr-3 h-6 w-6 text-blue-400" />
                  Certifications
                </h2>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start p-3 bg-white/5 rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
