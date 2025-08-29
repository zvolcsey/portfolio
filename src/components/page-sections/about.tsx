import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

export default function About() {
  return (
    <section className='px-4 pt-4 pb-16 sm:pb-24'>
      <div className={cn('mx-auto w-full max-w-2xl space-y-12', 'text-center')}>
        <h2 className='text-2xl font-bold'>About Me</h2>
        {/* Introduction */}
        <p className={cn('mx-auto mb-4 w-full max-w-2xl', 'text-left')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          commodi ipsa tenetur voluptas impedit. Perferendis voluptates
          inventore deserunt voluptatum voluptatem architecto, maxime commodi
          saepe ipsum beatae explicabo tenetur quibusdam sunt quasi minima
          numquam minus cum incidunt fugiat fuga, consectetur quod eveniet amet
          aperiam?
        </p>
        <p className={cn('mx-auto w-full max-w-2xl', 'text-left')}>
          Cumque culpa animi incidunt harum eum impedit totam distinctio magnam
          maxime enim quaerat eligendi quia laborum repellendus fuga laudantium
          saepe quae quibusdam odit tempora, illo quas? Facilis culpa rerum quis
          beatae architecto sunt a, explicabo quam illo. Architecto perferendis,
          magnam libero voluptas eos aperiam distinctio! Ipsum odio suscipit
          quos modi ex perferendis soluta
        </p>
        {/* Core Stack */}
        <div className={cn('space-y-2', 'text-left')}>
          <p className='text-sm'>Core Stack:</p>
          <p className='flex flex-wrap items-center gap-2'>
            <Badge className='bg-[#007acc] text-white'>TypeScript</Badge>
            <Badge className='bg-[#f0db4f] text-black'>JavaScript (ES6+)</Badge>
            <Badge className='bg-[#61dbfb] text-black'>React</Badge>
            <Badge className='bg-[#000000] text-white'>Next.js</Badge>
            <Badge className='bg-sky-500 text-black'>Tailwind CSS</Badge>
            <Badge className='bg-[#3c873a] text-white'>Node.js</Badge>
            <Badge className='bg-[#000000] text-white'>Express.js</Badge>
            <Badge className='bg-[#336791] text-white'>PostgreSQL</Badge>
          </p>
        </div>
        {/* Other Skills */}
        <div className='flex flex-wrap items-center justify-end gap-2'>
          <Badge>Open Source Contributor</Badge>
          <Badge>Problem Solver</Badge>
          <Badge>TypeScript Enthusiast</Badge>
          <Badge>System-Design Fundamentals</Badge>
        </div>
      </div>
    </section>
  );
}
