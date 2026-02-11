"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig, resumeData, aboutData } from "@/lib/config"
import { ExperienceSection } from "@/components/resume/ExperienceSection"
import { EducationSection } from "@/components/resume/EducationSection"
import { SkillsSection } from "@/components/resume/SkillsSection"
import { CertificationsSection } from "@/components/resume/CertificationsSection"

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };



  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = siteConfig.resumePath;
    link.download = 'Aryan_Patel_Resume.pdf';
    link.click();
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Resume
          </motion.h1>
          <motion.button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card className="bg-white/10 border-white/20 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl font-bold text-white">AP</span>
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">{siteConfig.name}</h2>
                  <p className="text-xl text-blue-400 mb-4">{siteConfig.title}</p>
                  <p className="text-gray-300 mb-6">{siteConfig.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-center md:justify-start">
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">{siteConfig.email}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Phone className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">{siteConfig.phone}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">{siteConfig.location}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Globe className="w-5 h-5 text-blue-400 mr-3" />
                      <a href={siteConfig.url} className="text-blue-400 hover:underline">{siteConfig.url}</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <ExperienceSection experience={resumeData.experience} />

        <EducationSection education={aboutData.education} />

        <SkillsSection skills={resumeData.skills} />

        <CertificationsSection certifications={resumeData.certifications} />
      </div>
    </motion.div>
  )
}
