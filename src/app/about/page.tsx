import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code2, Brain, Trophy, Cpu, Smartphone, Lock, Database, Server, LayoutTemplate, Settings } from "lucide-react"

export default function About() {
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
      color: "from-purple-600/20 to-purple-900/20"
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
      color: "from-blue-600/20 to-blue-900/20"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack developer with expertise in modern web technologies and a passion for building scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="mr-3 h-6 w-6 text-purple-400" />
                My Journey
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a Computer Science Engineering graduate with a CGPA of 8.12, I've developed expertise across the full stack, from frontend frameworks like React and Next.js to backend technologies including Spring Boot and Node.js.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My professional experience includes building scalable web applications using modern architectures, optimizing database performance, and implementing secure RESTful APIs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond development, I'm passionate about cybersecurity, having hands-on experience with penetration testing tools and ethical hacking methodologies.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-purple-400" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-400 pl-6 pb-6 last:pb-0">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-purple-300">{edu.institution}</p>
                    <p className="text-gray-400">{edu.year}</p>
                    <p className="text-gray-300">{edu.gpa}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`bg-gradient-to-br ${category.color} border-white/20`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-white/10 rounded-lg mr-3 border border-white/10">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-white/5 text-gray-200 border-white/10 hover:bg-white/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Additional Skills */}
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <LayoutTemplate className="mr-3 h-6 w-6 text-purple-400" />
                Additional Skills
              </h2>
              <div className="space-y-6">
                {additionalSkills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-white mb-3">{skillGroup.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="bg-white/5 text-gray-200 border-white/10 hover:bg-white/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Trophy className="mr-3 h-6 w-6 text-purple-400" />
                Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}