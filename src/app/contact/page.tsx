"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with email services like EmailJS, Formspree, etc.
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 animate-slide-in-left">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">aryanpatel7987@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+91-7987419262</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-gray-300">Katni, Madhya Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 animate-slide-in-left">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/aryanpatel7987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/aryanpatel7987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="mailto:aryanpatel7987@gmail.com"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 animate-slide-in-left">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Let's Work Together!</h3>
                <p className="text-gray-300 mb-4">
                  I'm actively seeking opportunities in software development, particularly in:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Frontend Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    AI/ML Projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Data Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 border-white/20 animate-slide-in-right">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
