import { GraduationCap, Briefcase, Code, Award } from "lucide-react"
import { IconType } from "../types"

/**
 * Icon mapping for timeline item types.
 * Provides consistent icon rendering across the application.
 */
export const timelineIcons: Record<IconType, React.ReactElement> = {
  life: <Award className="w-4 h-4 text-pink-400" aria-label="Life event icon" />,
  education: <GraduationCap className="w-4 h-4 text-blue-400" aria-label="Education icon" />,
  code: <Code className="w-4 h-4 text-green-400" aria-label="Coding icon" />,
  award: <Briefcase className="w-4 h-4 text-yellow-400" aria-label="Award icon" />
}
