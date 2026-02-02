import { motion } from "motion/react";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import certificationsData from "../data/certificationsData";

export function Certifications() {
  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      "Programming": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "Data Analytics": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Database": "bg-green-500/10 text-green-400 border-green-500/30",
      "Business Intelligence": "bg-orange-500/10 text-orange-400 border-orange-500/30",
      "Data Visualization": "bg-pink-500/10 text-pink-400 border-pink-500/30"
    };
    return colors[category || ""] || "bg-gray-500/10 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" id="certifications-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-96 h-96 bg-gradient-to-r from-green-600 to-blue-600 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-10 h-10 text-yellow-400" />
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block" style={{fontSize: "1.5rem", lineHeight: "1.5"}}>
                  Certificates
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
              Below are the certifications I have earned in various technologies, showcasing my continuous learning and expertise.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">{certificationsData.length}</span> Certifications Earned
            </span>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  {cert.category && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className={`${getCategoryColor(cert.category)} border text-xs backdrop-blur-sm`}>
                        {cert.category}
                      </Badge>
                    </div>
                  )}

                  {/* Verification Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-600/90 rounded-full backdrop-blur-sm">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Issuer */}
                  {cert.issuer && (
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                      {cert.issuer}
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Spacer */}
                  <div className="flex-1"></div>

                  {/* View Certificate Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 group/btn">
                      View Certificate
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-20"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
            <p className="text-gray-400 mb-4">
              Continuously learning and growing in the field of data analytics and AI
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>More certifications coming soon!</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 -left-32 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
