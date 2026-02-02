import { useEffect, useState } from 'react';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { User, Calendar, MapPin, Briefcase, GraduationCap, Languages, Wrench, Heart } from "lucide-react";
import aboutImg from "../assets/images/aboutimg.png";
import projectsData from "../data/projectsData";
import certificationsData from "../data/certificationsData";

export function About() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = (dob: string) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    };

    const dob = '2001-06-15';
    setAge(calculateAge(dob));
  }, []);

  const skills = [
    { skill: 'MySQL', percentage: 80, color: 'from-blue-600 to-blue-700' },
    { skill: 'Python', percentage: 75, color: 'from-yellow-600 to-yellow-700' },
    { skill: 'Java', percentage: 65, color: 'from-orange-600 to-orange-700' },
    { skill: 'Data Visualization', percentage: 80, color: 'from-green-600 to-green-700' },
    { skill: 'Statistical Analysis', percentage: 70, color: 'from-purple-600 to-purple-700' },
    { skill: 'React.js', percentage: 75, color: 'from-cyan-600 to-cyan-700' },
    { skill: 'Flask', percentage: 70, color: 'from-red-600 to-red-700' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 inline-block">
              About Me
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about technology, innovation, and creating impactful solutions
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Image Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
                    <ImageWithFallback
                      src= {aboutImg}
                      alt="Profile"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-100"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-blue-600 px-6 py-2 rounded-full">
                    <span className="text-white">Open To Work</span>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                    <User className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Name</p>
                      <p className="text-sm">Rohith Reddy Rudraiah Gari</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                    <Calendar className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Date of Birth</p>
                      <p className="text-sm">15 June 2001 (Age: {age})</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm">Hyderabad, India</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700">
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{projectsData.length}</p>
                    <p className="text-xs text-gray-400 mt-1">Projects</p>
                  </div>
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{certificationsData.length}</p>
                    <p className="text-xs text-gray-400 mt-1">Certifications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500">
              <div className="p-6">
                <h3 className="text-white mb-6 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.map(({ skill, percentage, color }) => (
                    <div key={skill} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                        <span className="text-xs text-gray-500">{percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out rounded-full`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <div className="p-8">
                <h2 className="text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  Introduction
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Recent B.Tech. graduate in Computer Science & Engineering from CMR College of Engineering & Technology, 
                  eager to apply my expertise in software development, artificial intelligence, and data analysis to drive innovative solutions. 
                  Proficient in programming, machine learning, and statistical modeling, I am passionate about building scalable software, 
                  developing intelligent systems, and transforming data into actionable insights. 
                  With hands-on project experience in coding, AI model development, and data visualization, 
                  I am excited to contribute to technology-driven decision-making and business success.
                </p>
              </div>
            </div>

            {/* Professional Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 p-6 group">
                <div className="flex items-start gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-blue-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-white mb-2">Profile</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Data Analytics, Software Engineering, and AI Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* Domain Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 p-6 group">
                <div className="flex items-start gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-purple-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-white mb-2">Domain</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Retail Technology, FinTech, FMCG, E-commerce, Human Resources & Sports
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 p-6 group">
                <div className="flex items-start gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-green-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-white mb-2">Education</h3>
                    <p className="text-gray-400 text-sm">Bachelor of Technology</p>
                    <p className="text-gray-500 text-xs mt-1">Computer Science & Engineering</p>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 p-6 group">
                <div className="flex items-start gap-3 mb-4">
                  <Languages className="w-5 h-5 text-yellow-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-white mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['English', 'Telugu', 'Hindi'].map((lang) => (
                        <Badge key={lang} variant="secondary" className="bg-gray-800/50 text-gray-300 border border-gray-700 text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-6">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-cyan-400" />
                Tools & Technologies
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">BI Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {['Microsoft Power BI', 'Tableau'].map((tool) => (
                      <Badge key={tool} className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-0 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Other Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {['Excel', 'Git', 'Fast API', 'Spring Boot', 'Machine Learning'].map((skill) => (
                      <Badge key={skill} className="bg-gray-800/50 text-blue-400 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 p-6">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Traveling', 'Cricket'].map((interest) => (
                  <Badge key={interest} className="bg-gradient-to-r from-pink-600 to-rose-600 text-white border-0">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
