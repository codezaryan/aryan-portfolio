import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

interface CertificationsSectionProps {
  certifications: string[];
}

/**
 * Reusable component for displaying certifications section
 */
export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
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
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Trophy className="mr-3 h-6 w-6 text-blue-400" />
            Certifications
          </h2>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex items-start p-3 bg-white/5 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
