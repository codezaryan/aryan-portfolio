"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X,  User, MessageSquare, Code, Briefcase, FileText, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const navLinks = [
    // { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { href: "/about", label: "About", icon: <User className="w-5 h-5" /> },
    { href: "/projects", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { href: "/services", label: "Services", icon: <Briefcase className="w-5 h-5" /> },
    { href: "/resume", label: "Resume", icon: <FileText className="w-5 h-5" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ]

  return (
    <nav 
      className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10"
      ref={navRef}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg mr-3"
              whileHover={{ rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="h-5 w-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Aryan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.filter(link => link.href !== "/contact").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  pathname === item.href
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                {pathname === item.href && (
                  <motion.span 
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-purple-500"
                    layoutId="navIndicator"
                  />
                )}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all ml-2"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="md:hidden fixed inset-0  z-40 pt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                className="md:hidden fixed top-16 left-0 right-0 bg-slate-900 border-t border-white/10 px-4 py-2 z-50"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-base font-medium rounded-lg ${
                        pathname === item.href
                          ? "bg-white/10 text-purple-400"
                          : "text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                      {pathname === item.href && (
                        <motion.span 
                          className="ml-auto h-2 w-2 bg-purple-500 rounded-full"
                          layoutId="mobileNavIndicator"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}