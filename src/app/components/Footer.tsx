import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
  ]

  const contactLinks = [
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
    { href: "mailto:aryanpatel7987@gmail.com", label: "Email Me" },
    { href: "tel:+917987419262", label: "Call Me" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/30 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Aryan Patel</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Computer Science Engineering Graduate (2020-2024) with CGPA 8.12. Passionate full-stack developer
              specializing in modern web technologies and creating innovative digital solutions.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin className="w-4 h-4 mr-2 text-purple-400" />
              <span>Katni, Madhya Pradesh, India</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail className="w-4 h-4 mr-2 text-purple-400" />
              <a href="mailto:aryanpatel7987@gmail.com" className="hover:text-purple-400 transition-colors">
                aryanpatel7987@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2 text-purple-400" />
              <a href="tel:+917987419262" className="hover:text-purple-400 transition-colors">
                +91-7987419262
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-purple-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/aryanpatel7987"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-purple-600/30 transition-colors border border-white/20 hover:border-purple-400/50"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/aryanpatel7987"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-purple-600/30 transition-colors border border-white/20 hover:border-purple-400/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a
              href="mailto:aryanpatel7987@gmail.com"
              className="p-2 bg-white/10 rounded-lg hover:bg-purple-600/30 transition-colors border border-white/20 hover:border-purple-400/50"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300 flex items-center justify-center md:justify-end">
              © {currentYear} Aryan Patel. Made with
              <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" />
              using Next.js & Tailwind CSS
            </p>
            <p className="text-sm text-gray-400 mt-1">CSE Graduate | CGPA 8.12 | Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
