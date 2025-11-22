export type Social = {
  name: string;
  href: string;
  icon: 'linkedin' | 'instagram' | 'github';
};

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jos%C3%A9-hern%C3%A1ndez-720476287/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jozehernandezz/?next=%2F',
    icon: 'instagram',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Jozexo',
    icon: 'github',
  },
];
