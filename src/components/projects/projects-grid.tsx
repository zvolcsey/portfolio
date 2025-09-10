import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import ProjectItem from './project-item';

export default function ProjectsGrid() {
  return (
    <ul
      className={cn(
        'grid grid-cols-1 gap-6',
        'sm:grid-cols-2 lg:grid-cols-3',
        'mx-auto w-full max-w-7xl px-4 2xl:p-0'
      )}
    >
      {projects.map((project) => (
        <li key={project.id} className='h-full'>
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  );
}
