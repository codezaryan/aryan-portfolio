import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Smartphone, Globe, BarChart3 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development using modern technologies like Next.js, React, Node.js, and databases.",
      skills: ["Next.js", "React", "Node.js", "MongoDB", "PostgreSQL"],
      deliverables: ["Responsive web applications", "RESTful APIs", "Database design", "Deployment & hosting"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and modern mobile development practices.",
      skills: ["React Native", "TypeScript", "Mobile UI/UX"],
      deliverables: ["iOS & Android apps", "App store deployment", "Push notifications", "Offline functionality"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "Intelligent applications powered by AI/ML algorithms for automation and data-driven insights.",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis"],
      deliverables: ["Predictive models", "Data analysis", "Automation scripts", "AI-powered features"],
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Transform raw data into actionable insights with interactive dashboards and comprehensive reports.",
      skills: ["Python", "Excel", "D3.js", "Chart.js", "Power BI"],
      deliverables: ["Interactive dashboards", "Data reports", "Excel automation", "Business intelligence"],
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "Efficient database architecture and optimization for scalable and performant applications.",
      skills: ["SQL", "MongoDB", "Database Design", "Performance Tuning"],
      deliverables: ["Database schema", "Query optimization", "Data migration", "Backup strategies"],
    },
    {
      icon: Code,
      title: "API Development & Integration",
      description: "Robust API development and third-party service integrations for seamless connectivity.",
      skills: ["REST APIs", "GraphQL", "Microservices", "API Security"],
      deliverables: ["RESTful APIs", "API documentation", "Third-party integrations", "API testing"],
    },
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
              className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 animate-slide-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-purple-600/20 rounded-lg mr-4 group-hover:bg-purple-600/30 transition-colors">
                    <service.icon className="h-8 w-8 text-purple-400" />
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
                        className="bg-blue-600/20 text-blue-300 border-blue-500/30"
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
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
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
          <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume"
                  className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
