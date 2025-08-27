import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className='px-4 py-16 sm:py-24'>
      <div className={cn('mx-auto max-w-3xl space-y-8', 'text-center')}>
        {/* Greeting */}
        <div className={cn('flex items-center justify-center gap-4')}>
          <div className='relative'>
            <Avatar
              className={cn(
                'h-16 w-16 sm:h-20 sm:w-20',
                'border-2 border-slate-200',
                'shadow-md'
              )}
            >
              <AvatarImage
                src='./me-192.png'
                alt='Profile picture of Zoltán Völcsey'
                className='object-cover object-center'
                style={{ imageRendering: 'crisp-edges' }}
              />
              <AvatarFallback>ZV</AvatarFallback>
            </Avatar>
            <p
              className={cn('absolute right-0 bottom-0', 'text-xl sm:text-3xl')}
            >
              👋
            </p>
          </div>
          <p className='self-end'>Hi, I&apos;m Zoltán Völcsey</p>
        </div>

        {/* Role */}
        <h1 className='text-5xl font-bold'>
          Full Stack <span className='text-primary'>Developer</span>
        </h1>

        {/* Description */}
        <p>
          Current focus:{' '}
          <span className='font-semibold'>
            CS, Math, Web Development, System Design
          </span>
        </p>

        {/* CTA buttons */}
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-4',
            'sm:flex-row'
          )}
        >
          <Link
            href='https://www.linkedin.com/in/zvolcsey'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button>
              Contact me here <BsLinkedin className='h-4 w-4' />
            </Button>
          </Link>
          <Link href='/projects'>
            <Button variant='outline'>
              View My Work
              <HiArrowRight className='h-4 w-4' />
            </Button>
          </Link>
          <Link
            href='https://github.com/zvolcsey'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='outline'>
              <BsGithub className='h-4 w-4' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
