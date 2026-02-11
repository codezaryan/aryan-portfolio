import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { ExperienceItem } from '@/lib/types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

/**
 * Reusable component for displaying professional experience section
 */
export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      <Card className="bg-white/10 border-white/20 mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Briefcase className="mr-3 h-6 w-6 text-blue-400" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-blue-400 pl-6 pb-6 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ x: 10 }}
              >
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <p className="text-purple-300">{exp.company}</p>
                <p className="text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-300 mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-600/20 text-blue-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
