import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  /** The main heading text */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional icon to display alongside the title */
  icon?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable section header component with consistent styling and animations.
 * Used across different pages for section titles.
 */
export const SectionHeader = ({
  title,
  subtitle,
  icon,
  className = ''
}: SectionHeaderProps) => {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {icon && <span className="mr-3 inline-block">{icon}</span>}
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-gray-300 mt-3 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
