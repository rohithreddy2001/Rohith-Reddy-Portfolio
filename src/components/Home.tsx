import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Github, Linkedin, Link as LinkIcon, ArrowDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = ["Data Analyst", "Power BI Developer", "Data Scientist"];

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setTypingText(currentText.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (!isDeleting && charIndex > currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setTypingText(currentText.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % typingTexts.length);
      setCharIndex(0);
      timeout = setTimeout(() => { }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohithreddyrudraiahgari/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      name: "GitHub",
      url: "https://github.com/rohithreddy2001",
      icon: Github,
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:shadow-gray-500/50"
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/Rohith2001",
      icon: LinkIcon,
      color: "from-green-600 to-green-700",
      hoverColor: "hover:shadow-green-500/50"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300">Hello, I'm</span>
          </motion.div>

          {/* Name - Enhanced Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <div className="relative inline-block">
              {/* Glowing background effect for name */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-40 animate-pulse"></div>

              <h1 className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-2xl whitespace-nowrap" style={{ fontSize: "clamp(1.5rem, 4vw, 5rem)", lineHeight: "1.2" }}>
                Rohith Reddy Rudraiah Gari
              </h1>
            </div>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-gray-400">I'm a</span>
              <div className="relative">
                <span className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent min-w-[280px] inline-block" style={{ fontSize: "1.5rem", lineHeight: "1.5" }}>
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
              <h2 className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI Enthusiast
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            Passionate about transforming data into actionable insights and building intelligent solutions
            that drive innovation and business success.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-4 bg-gradient-to-br ${social.color} rounded-xl shadow-lg ${social.hoverColor} hover:shadow-xl transition-all duration-300`}
              >
                <social.icon className="w-6 h-6 text-white" />

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#about-section">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Explore My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact-section">
              <Button variant="outline" className="border-2 border-gray-700 text-black px-8 py-6 rounded-xl backdrop-blur-sm hover:border-purple-500 hover:bg-purple-500 hover:text-black transition-all duration-300 group">
                Get In Touch
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}