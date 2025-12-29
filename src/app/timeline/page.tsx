"use client"

import { GraduationCap, Briefcase, Code, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type TimelineItem = {
  title: string
  type: IconType
  event: string
}

const data: TimelineItem[] = [
  {
    title: "Birth • 20 Aug 2002",
    type: "life",
    event:
      "Born in Vijayraghavgarh, Katni, Madhya Pradesh, India."
  },

  {
    title: "Early Academic Foundation • 2005",
    type: "education",
    event:
      "Entered formal education at the age of three, developing early cognitive discipline and structured learning habits."
  },

  {
    title: "Primary Academic Progression • 2008",
    type: "education",
    event:
      "Completed kindergarten and formally transitioned into primary education with strong foundational competencies."
  },

  {
    title: "Secondary & Senior Secondary Education • 2008 – 2020",
    type: "education",
    event:
      "Completed schooling through Class 12, establishing advanced proficiency in mathematics, logical reasoning, and core scientific principles."
  },

  {
    title: "Undergraduate Engineering Degree • 2020 – 2024",
    type: "education",
    event:
      "Completed Bachelor of Technology in Computer Science Engineering, acquiring formal expertise in algorithms, data structures, databases, operating systems, computer networks, and software engineering methodologies."
  },

  {
    title: "Advanced Professional Preparation • 2024",
    type: "life",
    event:
      "Engaged in structured upskilling in full-stack development, software architecture, version control workflows, and system scalability through project-driven learning."
  },

  {
    title: "Industry Appointment • 2025",
    type: "award",
    event:
      "Joined Peerme Software Technology Pvt. Ltd., Bangalore as a Full-Stack Software Developer, contributing to enterprise-grade applications and high-availability web platforms."
  },

  {
    title: "Current Engineering Focus • 2025",
    type: "code",
    event:
      "Actively specializing in modern JavaScript frameworks, backend architecture, performance optimization, cloud-native deployment, and scalable system design."
  }
]




type IconType = 'life' | 'education' | 'code' | 'award'

const icons: Record<IconType, React.ReactElement> = {
  life: <Award className="w-4 h-4 text-pink-400" />,
  education: <GraduationCap className="w-4 h-4 text-blue-400" />,
  code: <Code className="w-4 h-4 text-green-400" />,
  award: <Briefcase className="w-4 h-4 text-yellow-400" />
}

export default function TimelinePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">TimeLine & Journey</h1>
          <p className="text-gray-300 mt-3">Life events, education & coding evolution</p>
        </div>

        <div className="relative border-l border-purple-500/40 ml-6 space-y-10">
          {data.map((item, i) => (
            <div key={i} className="relative pl-10">

              {/* Dot */}
              <span className="absolute -left-[11px] top-6 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 ring-4 ring-purple-400/20">
                {icons[item.type]}
              </span>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-[1.02] transition">
                <CardContent className="p-5">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{item.event}</p>
                </CardContent>
              </Card>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
