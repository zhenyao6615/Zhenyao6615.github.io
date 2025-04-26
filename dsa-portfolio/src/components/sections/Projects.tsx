import React from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/lib/types';

export default function Projects({ projects }: { projects: Project[] }) {
  // Add a safety check to ensure projects is defined and is an array
  const projectsToRender = Array.isArray(projects) ? projects : [];
  
  return (
    <section id="projects" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">My STEM Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToRender.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projectsToRender.length === 0 && (
            <p className="text-center text-gray-500">No projects to display yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}