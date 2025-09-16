import { articles } from '@/lib/data';
import ArticlePreview from './article-preview';

export default function ArticlesList() {
  return (
    <ul className='mx-auto flex w-full max-w-xl flex-col gap-12 px-4 sm:p-0'>
      {articles.map((article) => (
        <li key={article.id} className='h-full'>
          <ArticlePreview article={article} />
        </li>
      ))}
    </ul>
  );
}
