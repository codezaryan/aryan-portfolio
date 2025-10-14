import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Smartphone, Globe, BarChart3, Server, Shield, Cloud, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development using modern technologies like Next.js, React, Node.js, and databases.",
      skills: ["Next.js", "React", "Node.js", "Spring Boot", "MySQL", "Web UI/UX"],
      deliverables: ["Responsive web applications", "RESTful APIs", "Database design", "Deployment & hosting"],
      color: "from-blue-600/20 to-blue-900/20"
    },
    {
      icon: Server,
      title: "API Design & Development",
      description: "Robust API development and third-party service integrations for seamless connectivity.",
      skills: ["REST APIs", "GraphQL", "Microservices", "API Security"],
      deliverables: ["RESTful APIs", "API documentation", "Third-party integrations", "API testing"],
      color: "from-purple-600/20 to-purple-900/20"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and modern mobile development practices.",
      skills: ["React Native", "TypeScript", "Spring Boot", "MySQL", "Mobile UI/UX"],
      deliverables: ["iOS & Android apps", "App store deployment", "Push notifications", "Offline functionality"],
      color: "from-emerald-600/20 to-emerald-900/20"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment & DevOps",
      description: "Efficient cloud deployment and DevOps practices for scalable and reliable applications.",
      skills: ["Docker/Kubernetes", "AWS", "CI/CD (GitHub Actions/GitLab)", "Cloud Architecture"],
      deliverables: ["Cloud deployment", "CI/CD pipelines", "Infrastructure as Code", "Monitoring & logging"],
      color: "from-amber-600/20 to-amber-900/20"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive software development services to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${service.color} border-white/20 hover:border-blue-400/30 transition-all duration-300 animate-slide-in-up group`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-blue-600/20 rounded-lg mr-4 group-hover:bg-blue-600/30 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
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

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">What You Get</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View My Work
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
