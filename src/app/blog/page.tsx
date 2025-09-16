import { cn } from '@/lib/utils';
import ArticlesList from '@/components/blog/articles-list';

export default function Blog() {
  return (
    <section className='h-full'>
      <div className='h-full space-y-8'>
        <div
          className={cn(
            'flex h-55 flex-col items-center justify-center gap-6',
            'bg-slate-100 text-center shadow-sm'
          )}
        >
          <h1 className='text-center text-3xl font-bold'>Blog</h1>
          <p className='text-sm text-slate-700'>
            A collection of articles on my insights, deep dives, and experiences
            in software engineering.
          </p>
        </div>
        <ArticlesList />
      </div>
    </section>
  );
}
