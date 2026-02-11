import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin, Heart, Code, Briefcase, User, MessageSquare } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Navigation",
      icon: <User className="w-5 h-5 text-purple-400" />,
      links: [
        { href: "/", label: "Home", icon: <User className="w-4 h-4 mr-2" /> },
        { href: "/about", label: "About", icon: <User className="w-4 h-4 mr-2" /> },
        { href: "/projects", label: "Projects", icon: <Briefcase className="w-4 h-4 mr-2" /> },
        { href: "/services", label: "Services", icon: <Code className="w-4 h-4 mr-2" /> },
      ]
    },
    {
      title: "Connect",
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
      links: [
        { href: "/contact", label: "Contact", icon: <Mail className="w-4 h-4 mr-2" /> },
        { href: "mailto:aryanpatel7987@gmail.com", label: "Email", icon: <Mail className="w-4 h-4 mr-2" /> },
        { href: "tel:+917987419262", label: "Call", icon: <Phone className="w-4 h-4 mr-2" /> },
        { href: "/resume", label: "Resume", icon: <Briefcase className="w-4 h-4 mr-2" /> },
      ]
    }
  ]

  const socialLinks = [
    { href: "https://github.com/codezaryan", icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { href: "https://linkedin.com/in/codezaryan", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { href: "mailto:aryanpatel7987@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900 border-t border-white/10  relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-900/20 blur-[80px]"></div>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-900/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1.5 rounded-lg mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Aryan Patel</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-Stack Software Developer specializing in building high-performance applications with modern technologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <div className="p-1.5 mr-3 bg-white/10 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span>Bengaluru, India</span>
              </div>
              <a href="mailto:aryanpatel7987@gmail.com" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                <div className="p-1.5 mr-3 bg-white/10 rounded-lg border border-white/10">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                aryanpatel7987@gmail.com
              </a>
              <a href="tel:+917987419262" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                <div className="p-1.5 mr-3 bg-white/10 rounded-lg border border-white/10">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                +91-7987419262
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1.5 rounded-lg mr-3">
                  {section.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center">
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1.5 rounded-lg mr-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            </div>
            <p className="text-gray-300 mb-4">Subscribe to my newsletter for updates and insights.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-3 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-lg hover:bg-purple-600/30 transition-all border border-white/10 hover:border-purple-400/50 flex items-center justify-center"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 flex items-center justify-center md:justify-end">
              © {currentYear} Aryan Patel. Crafted with
              <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" />
              using Next.js & Tailwind CSS
            </p>
            <p className="text-sm text-gray-400 mt-2">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}