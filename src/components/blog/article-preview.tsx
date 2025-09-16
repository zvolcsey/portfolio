import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ArticlePreview(props: {
  article: (typeof import('@/lib/data').articles)[number];
}) {
  const { article } = props;

  return (
    <section className='group h-full cursor-pointer'>
      <div className='h-full overflow-hidden'>
        <h2
          className={cn(
            'line-clamp-1 text-2xl leading-relaxed font-bold text-blue-700'
          )}
        >
          {article.title}
        </h2>
        <div className='line-relaxed'>
          <time
            dateTime={article.publishedAt}
            className='text-xs text-slate-500'
          >
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          &nbsp;<span className='mx-1 text-xs text-slate-500'>&#8226;</span>
          &nbsp;
          <span className='text-xs text-slate-500'>{article.readingTime}</span>
        </div>
        <p className='line-clamp-2 text-base leading-relaxed text-slate-700'>
          {article.description}
        </p>
        <Link
          href='#'
          className={cn(
            'text-primary line-relaxed inline-block text-xs',
            'group-hover:underline'
          )}
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
