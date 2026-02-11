'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  problem: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Reusable ProjectCard component for displaying project information
 */
export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <Card
        className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group hover:-translate-y-2 hover:rotate-1 animate-stagger overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <Code className="w-16 h-16 text-blue-400/50" />
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-sm font-medium mb-2">View Project</p>
              <div className="flex gap-2 justify-center">
                <ExternalLink className="w-5 h-5 text-white" />
                <Github className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        <CardHeader>
          <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-blue-400 font-medium">{project.problem}</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="outline"
                className="text-xs font-mono px-3 py-1 bg-white/5 text-gray-200 border-white/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={project.githubUrl} target="_blank">
            <Badge variant="outline" className="text-gray-300 hover:text-white cursor-pointer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Badge>
          </Link>
          <Link href={project.liveUrl} target="_blank">
            <Badge variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 cursor-pointer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Badge>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
