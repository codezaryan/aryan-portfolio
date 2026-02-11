"use client"

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Code, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactElement;
  skills: Skill[];
  color: string;
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

/**
 * Reusable SkillCard component for displaying skill categories
 */
export const SkillCard = ({ category, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card
        className={`bg-gradient-to-b ${category.color} border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-2`}
      >
        <CardHeader className="flex flex-row items-center space-y-0 space-x-4 pb-4">
          <div className="p-3 rounded-lg bg-black/20 border border-white/10 group-hover:bg-blue-600/20 transition-colors">
            {category.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs px-2 py-1 ${
                      skill.level === 'Advanced' ? 'border-green-400 text-green-300' :
                      skill.level === 'Intermediate' ? 'border-yellow-400 text-yellow-300' :
                      'border-blue-400 text-blue-300'
                    }`}
                  >
                    {skill.level}
                  </Badge>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.1), duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
