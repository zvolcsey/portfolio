import { cn } from '@/lib/utils';
import ProjectsGrid from '@/components/projects/projects-grid';

export default function Experience() {
  return (
    <section className='h-full'>
      <div className='h-full space-y-8'>
        <div
          className={cn(
            'flex h-55 flex-col items-center justify-center gap-6',
            'bg-slate-100 text-center shadow-sm'
          )}
        >
          <h1 className='text-center text-3xl font-bold'>Experience</h1>
          <p className='text-sm text-slate-700'>
            A showcase of projects I&#39;ve built and contributed to.
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}
