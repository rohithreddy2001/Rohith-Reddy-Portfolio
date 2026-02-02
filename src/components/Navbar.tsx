import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, User, FileText, Award, Briefcase, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home-section", icon: Home },
    { name: "About", href: "#about-section", icon: User },
    { name: "Resume", href: "#resume-section", icon: FileText },
    { name: "Projects", href: "#projects-section", icon: Briefcase },
    { name: "Certifications", href: "#certifications-section", icon: Award },
    { name: "Contact", href: "#contact-section", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const navHeight = window.innerWidth < 768 ? 120 : 100;
      const scrollPosition = window.scrollY + navHeight + 10; // buffer

      let currentSection = activeSection;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement;
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = item.href.replace("#", "").replace("-section", "");
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    const navHeight = window.innerWidth < 768 ? 120 : 100;

    if (element) {
      const offsetTop = element.offsetTop - navHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: window.innerWidth < 768 ? "auto" : "smooth", // instant for mobile
      });
    }

    if (window.innerWidth < 768) {
      setIsOpen(false); // instant close on mobile
    } else {
      setTimeout(() => setIsOpen(false), 400);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-xl border-b border-gray-800 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.button
              onClick={() => scrollToSection("#home-section")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Rohith Reddy Rudraiah Gari
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace("#", "").replace("-section", "");

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg backdrop-blur-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen &&
          (window.innerWidth < 768 ? (
            // Mobile: no animation
            <div className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection ===
                      item.href.replace("#", "").replace("-section", "")
                        ? "bg-gradient-to-r from-blue-600/25 to-purple-600/25 border border-blue-500/30 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Desktop: keep AnimatePresence + motion
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
              >
                <div className="px-4 py-4 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection ===
                        item.href.replace("#", "").replace("-section", "")
                          ? "bg-gradient-to-r from-blue-600/25 to-purple-600/25 border border-blue-500/30 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
      </motion.nav>

      <div className="h-20"></div>
    </>
  );
}