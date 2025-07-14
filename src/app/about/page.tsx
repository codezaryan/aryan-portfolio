import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code2, Brain, Trophy } from "lucide-react"

export default function About() {
  const education = [
    {
      degree: "B.Tech - Computer Science Engineering",
      institution: "Oriental Institute Of Science and Technology, Jabalpur",
      year: "2020-2024",
      gpa: "8.12/10",
      location: "Bhopal, Madhya Pradesh",
    },
  ]

  const certifications = [
    "Python Certificate - GUVI and Google for Education",
    "AI For India 2.0 - GUVI and Skill India",
    "SQL (Basic) Certificate - HackerRank",
    "3 Star in Java Problem-solving - HackerRank",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Passionate software engineering graduate with a strong foundation in modern technologies and a drive to
            create impactful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <Card className="bg-white/10 border-white/20 animate-slide-in-left">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="mr-3 h-6 w-6 text-purple-400" />
                My Journey
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a Computer Science Engineering graduate from Oriental Institute Of Science and Technology with a CGPA
                of 8.12, I've developed a strong passion for full-stack web development and creating innovative digital
                solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey includes hands-on experience as a Web Developer Intern at IKSC (Pune), where I worked with
                modern technologies like Next.js, React, Node.js, and PostgreSQL to build scalable web applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I consistently achieved top 3 positions in my academic career and earned a 3-star rating in Java
                problem-solving on HackerRank, demonstrating my commitment to excellence and continuous learning.
              </p>
            </CardContent>
          </Card>

          {/* Skills Breakdown */}
          <Card className="bg-white/10 border-white/20 animate-slide-in-right">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code2 className="mr-3 h-6 w-6 text-purple-400" />
                Technical Expertise
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      TypeScript
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                      Spring Boot
                    </Badge>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                      MySQL
                    </Badge>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                      MongoDB
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Specialized Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                      Spring Boot
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                      Excel
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-white/10 border-white/20 animate-slide-in-left">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-purple-400" />
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-400 pl-6 pb-6">
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-purple-300">{edu.institution}</p>
                  <p className="text-gray-400">{edu.year}</p>
                  <p className="text-gray-300">GPA: {edu.gpa}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 animate-slide-in-right">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Trophy className="mr-3 h-6 w-6 text-purple-400" />
                Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
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
