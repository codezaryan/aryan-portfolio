"use client"

import { Card, CardContent } from "@/components/ui/card"
import { timelineData } from "@/lib/config"
import { timelineIcons } from "@/lib/constants/timeline-icons"

/**
 * TimelinePage component displays a chronological journey of life events,
 * education milestones, and professional achievements.
 *
 * Features:
 * - Responsive timeline layout with visual icons
 * - Gradient background with glassmorphism cards
 * - Hover effects for interactive elements
 */
export default function TimelinePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Timeline & Journey</h1>
          <p className="text-gray-300 mt-3">Life events, education & coding evolution</p>
        </div>

        <div className="relative border-l border-purple-500/40 ml-6 space-y-10">
          {timelineData.map((item, i) => (
            <div key={i} className="relative pl-10">

              {/* Dot */}
              <span className="absolute -left-[11px] top-6 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 ring-4 ring-purple-400/20">
                {timelineIcons[item.type]}
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
