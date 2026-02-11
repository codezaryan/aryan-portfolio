import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code } from 'lucide-react';

interface SkillsSectionProps {
  skills: string[];
}

/**
 * Reusable component for displaying technical skills section
 */
export const SkillsSection = ({ skills }: SkillsSectionProps) => {
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
            <Code className="mr-3 h-6 w-6 text-blue-400" />
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 px-4 py-2">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
