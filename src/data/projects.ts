export type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "wired-site",
    slug: "wired-site",
    description: "Este portafolio: Astro + estética Lain + terminal.",
    tags: ["astro", "design", "css"],
    href: "/",
    image: "/img/lain-glich.gif",
  },
];
