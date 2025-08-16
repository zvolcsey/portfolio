import Link from 'next/link';
import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import NavLink from './nav-link';

import '@app/components.css';

export default function MainHeader() {
  return (
    <header
      className={cn(
        'fixed top-0 left-1/2 z-[999]',
        'h-20 w-full sm:px-8',
        '-translate-x-1/2',
        'border-primary rounded-none border-b',
        'shadow-lg shadow-black/[0.03] backdrop-blur-sm'
      )}
    >
      <nav
        className={cn(
          'flex flex-col items-center justify-center gap-3',
          'sm:flex-row sm:justify-evenly',
          'h-full w-full'
        )}
      >
        {/* Brand */}
        <Link
          href='/'
          className={cn(
            'text-xl font-bold tracking-widest uppercase sm:text-2xl'
          )}
        >
          Zoltán <span className='text-primary'>Völcsey</span>
        </Link>
        {/* Navigation links */}
        <ul className={cn('item-center flex justify-between space-x-8')}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
