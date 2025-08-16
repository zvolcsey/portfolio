'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@app/components.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`nav-link ${pathname.startsWith(href) ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
}
