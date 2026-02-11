import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { EducationItem } from '@/lib/types';

interface EducationSectionProps {
  education: EducationItem[];
}

/**
 * Reusable component for displaying education section
 */
export const EducationSection = ({ education }: EducationSectionProps) => {
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
            <GraduationCap className="mr-3 h-6 w-6 text-blue-400" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-blue-400 pl-6 pb-6 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ x: 10 }}
              >
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-purple-300">{edu.institution}</p>
                <p className="text-gray-400">{edu.year}</p>
                <p className="text-gray-300">{edu.gpa}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
