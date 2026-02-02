import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, Linkedin, Youtube, FileSpreadsheet, Presentation } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectData } from "../data/projectsData";

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2">
      {/* Animated gradient border effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div> */}
      
      {/* Image Container with Overlay */}
      <div className="relative h-56 overflow-hidden bg-gray-950">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Domain Badge */}
        <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
          <span className="text-xs text-blue-400">{project.domain}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-gray-800/50 text-blue-400 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <div className="text-gray-400 text-sm leading-relaxed space-y-1.5 max-h-32 overflow-y-auto custom-scrollbar">
          <ul className="list-disc list-inside space-y-1">
            {project.description.map((point, index) => (
              <li key={index} className="text-xs">{point}</li>
            ))}
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="space-y-3 pt-2">
          {/* Primary Actions - Always Show */}
          <div className="flex gap-2">
            {project.links.live_link && (
              <Button
                variant="default"
                size="sm"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg shadow-blue-900/50 hover:shadow-blue-900/70 transition-all duration-300"
                asChild
              >
                <a href={project.links.live_link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  View Live
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5 mr-1.5" />
                  GitHub
                </a>
              </Button>
            )}
          </div>

          {/* Secondary Actions - Social & Other Links */}
          <div className="flex gap-2 flex-wrap">
            {project.links.linkedin && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-[120px] bg-gray-800/30 text-blue-400 border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-3.5 h-3.5 mr-1.5" />
                  LinkedIn
                </a>
              </Button>
            )}
            {project.links.youtube && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-[120px] bg-gray-800/30 text-red-400 border-gray-700 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-3.5 h-3.5 mr-1.5" />
                  Video
                </a>
              </Button>
            )}
            {project.links.power_bi && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-[120px] bg-gray-800/30 text-yellow-400 border-gray-700 hover:bg-yellow-600 hover:text-white hover:border-yellow-500 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <a href={project.links.power_bi} target="_blank" rel="noopener noreferrer">
                  <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5" />
                  Power BI
                </a>
              </Button>
            )}
            {project.links.excel && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-[120px] bg-gray-800/30 text-green-400 border-gray-700 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <a href={project.links.excel} target="_blank" rel="noopener noreferrer">
                  <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5" />
                  Excel
                </a>
              </Button>
            )}
            {project.links.powerpoint && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-w-[120px] bg-gray-800/30 text-orange-400 border-gray-700 hover:bg-orange-600 hover:text-white hover:border-orange-500 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <a href={project.links.powerpoint} target="_blank" rel="noopener noreferrer">
                  <Presentation className="w-3.5 h-3.5 mr-1.5" />
                  PowerPoint
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
