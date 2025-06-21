import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin, Trophy } from "lucide-react"

export default function Resume() {
  const experience = [
    {
      title: "Web Developer Intern",
      company: "IKSC (Pune) - Full Stack Web Developer",
      period: "Aug 2024 - Feb 2025",
      description: [
        "Gained hands-on experience in full-stack web development using JavaScript, TypeScript, React, Next.js, Node.js, and Tailwind CSS",
        "Designed and developed responsive, user-friendly websites ensuring optimal performance across multiple devices",
        "Implemented and maintained robust front-end and back-end architectures to support business goals and enhance scalability",
        "Integrated APIs to facilitate real-time data exchange and improve functionality",
        "Utilized Git and GitHub for version control and streamlined collaboration workflows",
        "Gained expertise in databases, SQL, and API testing using Postman and REST",
      ],
    },
  ]

  const projects = [
    {
      title: "ReserveTable",
      technologies: ["Next.js", "PostgreSQL", "Google Maps API"],
      description:
        "Full-stack restaurant booking application with real-time confirmations and 30% improved query response time",
    },
    {
      title: "Task Manager",
      technologies: ["Next.js", "MongoDB", "JWT"],
      description: "Task management app with real-time tracking, deadline notifications, and role-based access control",
    },
    {
      title: "Portfolio/Landing Page",
      technologies: ["Next.js", "Tailwind CSS"],
      description: "Responsive personal portfolio and dynamic landing pages with fast load times",
    },
  ]

  const skills = {
    "Development Tools": [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "REST APIs",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "GitHub Actions",
      "Git",
      "Postman",
    ],
    "Programming Languages": ["Core Java", "JavaScript", "SQL"],
    "Operating Systems & Platforms": ["Windows", "MacOS", "Linux", "Android Studio", "VS Code", "IntelliJ", "MS Excel"],
  }

  const certifications = [
    "Python Certificate - GUVI and Google for Education",
    "AI For India 2.0 - GUVI and Skill India",
    "SQL (Basic) Certificate - HackerRank",
    "3 Star in Java Problem-solving - HackerRank",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">Resume</h1>
          <Button className="bg-purple-600 hover:bg-purple-700 animate-fade-in-up">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Contact Information */}
        <Card className="bg-white/10 border-white/20 mb-8 animate-slide-in-up">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Aryan Patel</h2>
              <p className="text-xl text-purple-300">Software Engineer</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                aryanpatel7987@gmail.com
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                +91-7987419262
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Katni, Madhya Pradesh, India
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Globe className="w-4 h-4 mr-2" />
                aryanpatel.dev
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Github className="w-4 h-4 mr-2" />
                github.com/aryanpatel7987
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Linkedin className="w-4 h-4 mr-2" />
                linkedin.com/in/aryanpatel7987
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="bg-white/10 border-white/20 mb-8 animate-slide-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science Engineering graduate with CGPA 8.12 and hands-on experience in full-stack web
              development. Proficient in modern technologies including JavaScript, React, Next.js, Node.js, and
              databases like PostgreSQL and MongoDB. Demonstrated expertise through internship at IKSC (Pune) and
              successful project implementations. Consistently high academic performer with proven problem-solving
              skills and certifications in Python, AI, and SQL. Passionate about creating scalable web applications and
              eager to contribute to innovative development teams.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-white/10 border-white/20 mb-8 animate-slide-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="border-l-2 border-purple-400 pl-6 pb-6">
              <h3 className="text-lg font-semibold text-white">B.Tech - Computer Science Engineering</h3>
              <p className="text-purple-300">Oriental Institute Of Science and Technology, Jabalpur</p>
              <p className="text-gray-400">2020 - 2024</p>
              <p className="text-gray-300">CGPA: 8.12/10</p>
              <p className="text-gray-400">Bhopal, Madhya Pradesh</p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="bg-white/10 border-white/20 mb-8 animate-slide-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  <p className="text-purple-300 mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Projects */}
        <Card className="bg-white/10 border-white/20 mb-8 animate-slide-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Projects</h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-purple-400 pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
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
                  <p className="text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="bg-white/10 border-white/20 mb-8 animate-slide-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-white mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 border-blue-500/30"
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

        {/* Achievements */}
        <Card className="bg-white/10 border-white/20 mb-8 animate-slide-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="mr-3 h-6 w-6 text-purple-400" />
              Achievements
            </h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-gray-300">Consistently achieved Top 3 position in academic career</span>
              </div>
              <div className="flex items-center p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-gray-300">3 Star rating in Java problem-solving on HackerRank</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="bg-white/10 border-white/20 animate-slide-in-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((certification, index) => (
                <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{certification}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
