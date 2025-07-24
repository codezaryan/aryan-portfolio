import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin,Globe, Github, Linkedin, Trophy, Code, Briefcase, GraduationCap, Award } from "lucide-react"
import DownloadResume from "../components/DownloadResume"

export default function Resume() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">Resume</h1>
          <DownloadResume />
        </div>

        {/* Contact Information */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Aryan Patel</h2>
              <p className="text-xl text-purple-300">Full Stack Java Developer</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                +91-7987419262
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                Bengaluru, India
              </div>
                <div className="flex items-center justify-center text-gray-300">
                <Globe className="w-4 h-4 mr-2 text-purple-400" />
                codezaryan.netlify.app
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                aryanpatel7987@gmail.com
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Github className="w-4 h-4 mr-2 text-purple-400" />
                github.com/aryanpatel7987
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Linkedin className="w-4 h-4 mr-2 text-purple-400" />
                linkedin.com/in/aryanpatel7987
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Code className="mr-3 h-6 w-6 text-purple-400" />
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Java Developer with hands-on experience in building scalable web applications using modern technologies. 
              Skilled in Java, Spring Boot, and React.js/Next.js with a strong focus on creating efficient RESTful APIs, 
              optimizing database performance, and delivering responsive user interfaces. Passionate about clean code 
              architecture and implementing best practices in software development.
            </p>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Code className="mr-3 h-6 w-6 text-purple-400" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge 
                        key={skill}
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

        {/* Professional Experience */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-purple-400" />
              Professional Experience
            </h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
                  <div className="text-purple-300">{exp.period}</div>
                </div>
                <h5 className="text-md font-medium text-gray-300 mb-3">{exp.title}</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Code className="mr-3 h-6 w-6 text-purple-400" />
              Key Projects
            </h3>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-purple-400 pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
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
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-purple-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-400 pl-6 pb-6 last:pb-0">
                  <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  <p className="text-purple-300">{edu.institution}</p>
                  <p className="text-gray-400">{edu.period}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-white/10 border-white/20 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="mr-3 h-6 w-6 text-purple-400" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-purple-400" />
              Certifications
            </h3>
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