'use client'

import { motion } from 'framer-motion'
import RotatingIconsRing from '@/components/ui/rotating-icon-ring/rotating.icon.ring'

export default function Hero() {
  return (
    <div className='relative min-h-screen overflow-hidden' style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
      
      {/* === PURE PURPLE GRID LINES ON DARK BACKGROUND === */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
        
        {/* Primary Purple Horizontal Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              rgba(147, 51, 234, 0.15) 49px,
              rgba(147, 51, 234, 0.15) 50px
            )
          `,
          backgroundSize: '100% 50px',
        }} />
        
        {/* Primary Purple Vertical Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              rgba(147, 51, 234, 0.15) 49px,
              rgba(147, 51, 234, 0.15) 50px
            )
          `,
          backgroundSize: '50px 100%',
        }} />
        
        {/* Diagonal Purple Lines (Subtle) */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(147, 51, 234, 0.2) 20px,
              rgba(147, 51, 234, 0.2) 21px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(147, 51, 234, 0.1) 20px,
              rgba(147, 51, 234, 0.1) 21px
            )
          `,
        }} />
        
        {/* Corner Purple Accent Lines */}
        <div className="absolute top-0 left-0 w-48 h-48 border-l-2 border-t-2" style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }} />
        <div className="absolute top-0 right-0 w-48 h-48 border-r-2 border-t-2" style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 border-l-2 border-b-2" style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }} />
        <div className="absolute bottom-0 right-0 w-48 h-48 border-r-2 border-b-2" style={{ borderColor: 'rgba(147, 51, 234, 0.3)' }} />
        
        {/* Purple Glow Particles on Grid */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: '1px',
              height: '1px',
              backgroundColor: 'rgb(147, 51, 234)',
              left: `${Math.floor(Math.random() * 100)}%`,
              top: `${Math.floor(Math.random() * 100)}%`,
            }}
            animate={{
              boxShadow: [
                '0 0 2px rgba(147, 51, 234, 0.3)',
                '0 0 8px rgba(147, 51, 234, 0.8)',
                '0 0 2px rgba(147, 51, 234, 0.3)',
              ],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Purple Ambient Glow */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ backgroundColor: 'rgb(18, 18, 18)' }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.03) 0%, rgb(18, 18, 18) 50%)',
            'radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.05) 0%, rgb(18, 18, 18) 50%)',
            'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.03) 0%, rgb(18, 18, 18) 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* === MAIN CONTENT === */}
      <div className="relative z-10 container mx-auto px-4 md:px-10 py-20" style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-12 md:gap-0">
          
          {/* LEFT COLUMN - Text Content */}
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            style={{ backgroundColor: 'rgb(18, 18, 18)' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-2xl" style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
              
              {/* Purple Grid Behind Text */}
              <div className="absolute -left-8 -top-8 w-96 h-96 opacity-20" style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(147, 51, 234, 0.2) 24px, rgba(147, 51, 234, 0.2) 25px),
                  repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(147, 51, 234, 0.2) 24px, rgba(147, 51, 234, 0.2) 25px)
                `,
                backgroundSize: '25px 25px',
                transform: 'rotate(-5deg)',
              }} />
              
              {/* Title Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                style={{ backgroundColor: 'rgb(18, 18, 18)' }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{
                  color: 'rgb(216, 180, 254)',
                  backgroundColor: 'rgba(147, 51, 234, 0.1)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  boxShadow: '0 0 15px rgba(147, 51, 234, 0.2)',
                }}>
                  <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'rgb(147, 51, 234)' }} />
                  Software Developer & Founder
                </span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                style={{ 
                  backgroundColor: 'rgb(18, 18, 18)',
                  color: 'white'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hey! I'm <span style={{
                  background: 'linear-gradient(135deg, rgb(192, 132, 252), rgb(147, 51, 234))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Aryan</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl mt-4 block" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  A Founder @ <span style={{ 
                    color: 'rgb(192, 132, 252)',
                    textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                  }}>NXTVEL_</span>
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                className="text-lg leading-relaxed mb-8"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.75)',
                  backgroundColor: 'rgb(18, 18, 18)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I'm Aryan, a passionate Software Developer and Founder of NXTVEL Technologies. 
                I specialize in building fast, scalable, and secure web applications using the 
                MERN stack (MongoDB, Express, React, Node.js) and Next.js. I focus on system design, 
                performance optimization, and automation to deliver real-world business value.
              </motion.p>
              
              {/* Purple Grid Divider */}
              <motion.div 
                className="my-8 relative"
                style={{ backgroundColor: 'rgb(18, 18, 18)' }}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              >
                <div className="h-px w-full" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), transparent)',
                  boxShadow: '0 0 10px rgba(147, 51, 234, 0.3)',
                }} />
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45" style={{
                  backgroundColor: 'rgb(147, 51, 234)',
                  boxShadow: '0 0 10px rgba(147, 51, 234, 0.8)',
                }} />
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                style={{ backgroundColor: 'rgb(18, 18, 18)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.a
                  href="projects"
                  className="px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2"
                  style={{
                    color: 'white',
                    background: 'linear-gradient(135deg, rgb(147, 51, 234), rgb(124, 58, 237))',
                    boxShadow: '0 4px 20px rgba(147, 51, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 30px rgba(147, 51, 234, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Projects</span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'white' }} />
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'white' }} />
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'white' }} />
                </motion.a>
                
                <motion.a
                  href="contact"
                  className="px-8 py-3.5 rounded-full text-sm font-semibold"
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(30, 30, 30, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(147, 51, 234, 0.15)',
                    borderColor: 'rgba(147, 51, 234, 0.5)',
                    boxShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
              
              {/* Purple Grid Decorative Elements */}
              <div className="absolute -bottom-12 -right-8 w-40 h-40 opacity-20" style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 9px, rgba(147, 51, 234, 0.4) 9px, rgba(147, 51, 234, 0.4) 10px),
                  repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(147, 51, 234, 0.4) 9px, rgba(147, 51, 234, 0.4) 10px)
                `,
                backgroundSize: '10px 10px',
                transform: 'rotate(15deg)',
              }} />
              
              <motion.div 
                className="absolute -top-8 right-16 w-4 h-4"
                style={{
                  border: '2px solid rgba(147, 51, 234, 0.6)',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
          
          {/* RIGHT COLUMN - Avatar */}
          <motion.div 
            className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end"
            style={{ backgroundColor: 'rgb(18, 18, 18)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative" style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
              
              {/* Purple Grid Behind Avatar */}
              <div className="absolute -inset-20 opacity-10" style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(147, 51, 234, 0.2) 24px, rgba(147, 51, 234, 0.2) 25px),
                  repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(147, 51, 234, 0.2) 24px, rgba(147, 51, 234, 0.2) 25px)
                `,
                backgroundSize: '25px 25px',
              }} />
              
              {/* Purple Glow Ring */}
              <motion.div 
                className="absolute -inset-12 rounded-full border-2"
                style={{ borderColor: 'rgba(147, 51, 234, 0.15)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Rotating Avatar Component */}
              <div className="relative z-10" style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
                <RotatingIconsRing />
              </div>
              
              {/* Purple Grid Dots on Orbit */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const radius = 280;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: '4px',
                      height: '4px',
                      backgroundColor: 'rgba(147, 51, 234, 0.7)',
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                      boxShadow: '0 0 8px rgba(147, 51, 234, 0.5)',
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}
              
              {/* Purple Grid Lines Orbiting */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const radius = 320;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: '1px',
                      height: '30px',
                      backgroundColor: 'rgba(147, 51, 234, 0.4)',
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                      transform: `rotate(${i * 45}deg)`,
                    }}
                    animate={{
                      height: ['30px', '50px', '30px'],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
        
        {/* Purple Grid Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ backgroundColor: 'rgb(18, 18, 18)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider" style={{ color: 'rgba(192, 132, 252, 0.7)' }}>
            SCROLL
          </span>
          <div className="relative">
            {/* Purple Grid Lines in Scroll Indicator */}
            <div className="absolute -inset-4 opacity-20" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(147, 51, 234, 0.3) 3px, rgba(147, 51, 234, 0.3) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(147, 51, 234, 0.3) 3px, rgba(147, 51, 234, 0.3) 4px)
              `,
              backgroundSize: '4px 4px',
            }} />
            
            <motion.div 
              className="rounded-full relative z-10"
              style={{
                width: '26px',
                height: '44px',
                border: '2px solid rgba(147, 51, 234, 0.4)',
                backgroundColor: 'rgba(30, 30, 30, 0.8)',
                backdropFilter: 'blur(8px)',
              }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="rounded-full absolute top-3 left-1/2 transform -translate-x-1/2"
                style={{
                  width: '3px',
                  height: '8px',
                  backgroundColor: 'rgb(147, 51, 234)',
                  boxShadow: '0 0 10px rgba(147, 51, 234, 0.8)',
                }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Purple Grid Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: 'linear-gradient(to top, rgb(18, 18, 18), rgba(18, 18, 18, 0.9), transparent)',
      }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(147, 51, 234, 0.3) 19px, rgba(147, 51, 234, 0.3) 20px)
          `,
        }} />
      </div>
    </div>
  )
}