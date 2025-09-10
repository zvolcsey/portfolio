import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ProjectItem(props: {
  project: (typeof import('@/lib/data').projects)[number];
}) {
  const { project } = props;
  const imageUrl = project?.imageUrl;
  const technologies = project?.technologies;

  let imageEl = (
    <span
      className={cn(
        'grid h-full place-items-center',
        'bg-slate-600 text-center text-sm text-white italic'
      )}
    >
      No image available
    </span>
  );
  if (imageUrl) {
    imageEl = (
      <Image
        src={imageUrl}
        alt={`Screenshot of ${project.title}`}
        layout='responsive'
        className={`object-cover`}
      />
    );
  }

  let technologiesEl = (
    <p className='mt-4 text-[0.7rem] tracking-wider italic'>
      No technologies available
    </p>
  );
  if (technologies?.length) {
    technologiesEl = (
      <ul className='mt-4 flex flex-wrap gap-2'>
        {technologies.map((tech) => (
          <li key={tech}>
            <Badge className='text-[0.7rem] tracking-wider uppercase'>
              {tech}
            </Badge>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className='group relative mx-auto h-full max-w-[30rem] cursor-pointer md:max-w-full'>
      <div
        className={cn(
          'h-full overflow-hidden pb-8',
          'rounded-2xl border border-black/5 bg-slate-100 shadow-sm',
          'group-hover:-translate-y-2 group-hover:shadow-2xl',
          'transition-all duration-300'
        )}
      >
        <div className='h-40 md:h-48'>{imageEl}</div>

        <div className='flex flex-col justify-between p-4 md:p-6'>
          <h2 className='line-clamp-1 text-lg leading-relaxed font-bold md:text-xl'>
            {project.title}
          </h2>
          <p className='line-clamp-2 text-sm leading-relaxed text-slate-700'>
            {project.description}
          </p>
          <Link
            href='#'
            className='text-primary mt-1.5 inline-block text-xs hover:underline'
          >
            Read More
          </Link>

          <h3 className='sr-only'>Technologies used:</h3>
          {technologiesEl}
        </div>

        <div className='absolute bottom-0 grid w-full grid-cols-2'>
          <Button className='rounded-none rounded-bl-xl' size='sm' asChild>
            <a
              href={project.liveUrl ?? '#'}
              target='_blank'
              rel='noopener noreferrer'
            >
              View Live
            </a>
          </Button>
          <Button
            className='rounded-none rounded-br-xl'
            variant='secondary'
            size='sm'
            asChild
          >
            <a
              href={project.githubUrl ?? '#'}
              target='_blank'
              rel='noopener noreferrer'
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
