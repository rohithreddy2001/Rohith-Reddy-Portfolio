import { ProjectCard } from "./ProjectCard";
import projectsData from "../data/projectsData";
import { Bold } from "lucide-react";

export function Projects() {
  // Calculate skill counts
  const excelCount = projectsData.filter(project => 
    project.skills.some(skill => skill.toLowerCase().includes('excel'))
  ).length;
  
  const powerBICount = projectsData.filter(project => 
    project.skills.some(skill => skill.toLowerCase().includes('power bi'))
  ).length;
  
  const mySQLCount = projectsData.filter(project => 
    project.skills.some(skill => skill.toLowerCase().includes('mysql'))
  ).length;
  
  const pythonCount = projectsData.filter(project => 
    project.skills.some(skill => 
      skill.toLowerCase().includes('pandas') || 
      skill.toLowerCase().includes('flask') || 
      skill.toLowerCase().includes('python') ||
      skill.toLowerCase().includes('matplotlib') ||
      skill.toLowerCase().includes('numpy')
    )
  ).length;
  
  const reactCount = projectsData.filter(project => 
    project.skills.some(skill => skill.toLowerCase().includes('react'))
  ).length + 1;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Enhanced Design */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3 inline-block" style={{fontSize: "1.5rem", lineHeight: "1.5"}}>
              Projects
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Below are the projects on different technologies
            </p>

            {/* Skills Count Section */}
            <div className="flex items-center justify-center gap-6 flex-wrap mt-8">
              {/* Excel */}
              <div className="group flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" 
                  alt="Excel" 
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-white px-2 py-1 rounded-lg bg-gradient-to-r from-green-600 to-green-700 min-w-[32px] text-center">{excelCount}</span>
              </div>

              {/* Power BI */}
              <div className="group flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/30">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" 
                  alt="Power BI" 
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-white px-2 py-1 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 min-w-[32px] text-center">{powerBICount}</span>
              </div>

              {/* MySQL */}
              <div className="group flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30">
                <img 
                  src="https://www.mysql.com/common/logos/mysql-logo.svg" 
                  alt="MySQL" 
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-white px-2 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 min-w-[32px] text-center">{mySQLCount}</span>
              </div>

              {/* Python */}
              <div className="group flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-800 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/python-5.svg" 
                  alt="Python" 
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-white px-2 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 min-w-[32px] text-center">{pythonCount}</span>
              </div>

              {/* React */}
              <div className="group flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/30">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg" 
                  alt="React" 
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-white px-2 py-1 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 min-w-[32px] text-center">{reactCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid with Enhanced Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
