export const links = [
  {
    href: '/experience',
    label: 'Experience',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
] as const;

export const projects = [
  {
    id: 'project-1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    githubUrl: undefined,
    liveUrl: undefined,
    imageUrl: undefined,
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Shadcn/UI',
      'PostgreSQL',
      'Prisma',
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    imageUrl: undefined,
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    technologies: [],
    githubUrl: undefined,
    liveUrl: undefined,
    imageUrl: undefined,
  },
] as const;

export const articles = [
  {
    id: 'article-1',
    title: 'Article 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    publishedAt: '2025-01-01',
    readingTime: '5 min read',
  },
  {
    id: 'article-2',
    title: 'Article 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    publishedAt: '2025-02-15',
    readingTime: '8 min read',
  },
  {
    id: 'article-3',
    title: 'Article 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    publishedAt: '2025-03-10',
    readingTime: '6 min read',
  },
] as const;
