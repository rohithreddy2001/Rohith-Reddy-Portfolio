import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, TrendingUp, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Resume() {
  const education = [
    {
      period: "August 2019 - April 2023",
      degree: "Bachelor of Technology",
      institution: "CMR College Of Engineering and Technology",
      grade: "First class",
      score: "CGPA: 7.51",
      icon: GraduationCap,
      color: "from-blue-600 to-cyan-600"
    },
    {
      period: "May 2017 - April 2019",
      degree: "12th Board",
      institution: "Sri Chaitanya Junior College",
      grade: "First class distinction",
      score: "AGGREGATE: 93.2 %",
      icon: Award,
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" id="resume-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 inline-block">
                Resume
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Passionate about turning data into actionable insights and excited to bring my skills in
              statistical analysis and data visualization.
            </motion.p>
          </div>
        </div>

        {/* Education Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white">Education</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 p-8">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

                {/* Icon Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`p-3 bg-gradient-to-br ${edu.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <edu.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{edu.period}</span>
                </div>

                {/* Degree */}
                <h3 className="text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {edu.institution}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

                {/* Grade and Score */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm group-hover:bg-gray-800/70 transition-colors">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">Grade</span>
                    </div>
                    <span className="text-sm text-white">{edu.grade}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg backdrop-blur-sm group-hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">Score</span>
                    </div>
                    <span className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            
            {/* Button Container */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                  <h3 className="text-white mb-2">Want to know more?</h3>
                  <p className="text-gray-400 text-sm">Download or view my complete resume</p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://drive.google.com/file/d/12GKHTPt7RWt3_CprFimWCaJDVIE3QuJB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                      View Resume
                    </Button>
                  </a>

                  <a
                    href="https://drive.google.com/uc?export=download&id=12GKHTPt7RWt3_CprFimWCaJDVIE3QuJB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline"
  className="border-2 border-gray-700 text-black px-8 py-6 rounded-xl backdrop-blur-sm
             hover:border-purple-500 hover:bg-purple-500 hover:text-purple transition-all duration-300 group">
                      <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                      Download PDF
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
