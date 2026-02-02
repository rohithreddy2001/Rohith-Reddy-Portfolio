import { motion } from "motion/react";
import { MapPin, Phone, Mail, FileDown, Linkedin, Youtube, Instagram, Send } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Hyderabad, India",
      link: null,
      color: "from-red-600 to-pink-600",
      iconColor: "text-red-400"
    },
    {
      icon: Phone,
      title: "Contact Number",
      content: "+91 8500536440",
      link: "tel:+918500536440",
      color: "from-green-600 to-emerald-600",
      iconColor: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "rohithreddyrudraiahgari@gmail.com",
      link: "mailto:rohithreddyrudraiahgari@gmail.com",
      color: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-400"
    },
    {
      icon: FileDown,
      title: "Resume Template",
      content: "Download link",
      link: "https://docs.google.com/document/d/1wfU16zlvp8dF106P_0HjJyL-g11uJDz0/edit?usp=sharing&ouid=102573090555690618207&rtpof=true&sd=true",
      color: "from-purple-600 to-pink-600",
      iconColor: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohithreddyrudraiahgari/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      name: "YouTube",
      url: "http://www.youtube.com/@rohithreddy1795",
      icon: Youtube,
      color: "from-red-600 to-red-700",
      hoverColor: "hover:shadow-red-500/50"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rohith.reddy_18/",
      icon: Instagram,
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:shadow-pink-500/50"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" id="contact-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Send className="w-10 h-10 text-blue-400" />
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block" style={{fontSize: "1.5rem", lineHeight: "1.5"}}>
                  Contact Me
                </h1>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Below are the details to reach out to me! I'm always open to discussing new opportunities and collaborations.
            </motion.p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 p-6 text-center">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center mb-4"
                >
                  <div className={`p-4 bg-gradient-to-br ${info.color} rounded-xl shadow-lg`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {info.title}
                </h3>

                {/* Content */}
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors text-sm break-words"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm">{info.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-800 p-12">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
            
            <div className="relative text-center">
              <h2 className="text-white mb-4">Let's Work Together</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project that you want to get started, think you need my help with something, 
                or just fancy saying hey, then get in touch.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:rohithreddyrudraiahgari@gmail.com">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group" cursor="pointer">
                    <Mail className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Send Email
                  </Button>
                </a>
                <a href="tel:+918500536440">
                  <Button
                    className="bg-white text-white border-2 border-gray-700 px-8 py-6 rounded-xl transition-all duration-300
                              hover:bg-green-500 hover:border-green-500 hover:text-black flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                    Call Now
                  </Button>

                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
            <p className="text-gray-400 mb-6 flex items-center justify-center gap-2">
              <span>Find me on</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-5 bg-gradient-to-br ${social.color} rounded-xl shadow-lg ${social.hoverColor} hover:shadow-xl transition-all duration-300`}
                >
                  <social.icon className="w-7 h-7 text-white" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rohith Reddy Rudraiah Gari. All rights reserved.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
