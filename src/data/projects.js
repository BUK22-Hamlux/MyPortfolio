import { images } from '../assets/images/images';

const ProjectList = [
  {
    id: '1',
    img: images.studentPortal,
    name: 'Student Portal',
    description: 'A full-featured portal to manage student assignments, track progress, and visualize grades with real-time updates.',
    category: 'Web',
    skillsUsed: [
      { id: 'javascript', name: 'JavaScript', color: 'text-yellow-400 bg-yellow-400/10' },
      { id: 'css', name: 'CSS', color: 'text-blue-400 bg-blue-400/10' },
      { id: 'html', name: 'HTML', color: 'text-orange-400 bg-orange-400/10' },
    ],
    linkUrl: null,
    codeUrl: 'https://github.com/BUK22-Hamlux/SMART-STUDENT-PORTAL',
  },
  {
    id: '2',
    img: images.landingPage,
    name: 'Marketing Landing Page',
    description: 'A responsive, conversion-optimized landing page for a marketing campaign with smooth scroll animations.',
    category: 'Web',
    skillsUsed: [
      { id: 'html', name: 'HTML', color: 'text-orange-400 bg-orange-400/10' },
      { id: 'css', name: 'CSS', color: 'text-blue-400 bg-blue-400/10' },
      { id: 'git', name: 'GIT', color: 'text-red-400 bg-red-400/10' },
    ],
    linkUrl: 'https://buk22-hamlux.github.io/landing-page/',
    codeUrl: 'https://github.com/BUK22-Hamlux/landing-page',
  },
  {
    id: '3',
    img: images.projectImage,
    name: 'Portfolio Website',
    description: 'My personal portfolio website built with React, Tailwind CSS, and Framer Motion — the one you\'re viewing right now!',
    category: 'Open Source',
    skillsUsed: [
      { id: 'react', name: 'React', color: 'text-cyan-400 bg-cyan-400/10' },
      { id: 'tailwind', name: 'Tailwind', color: 'text-teal-400 bg-teal-400/10' },
      { id: 'framer', name: 'Framer Motion', color: 'text-purple-400 bg-purple-400/10' },
    ],
    linkUrl: '#',
    codeUrl: '#',
  },
];

export default ProjectList;
