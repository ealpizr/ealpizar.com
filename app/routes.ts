export type Route = {
  displayName: string;
  href: string;
};

export const routes: Route[] = [
  { displayName: "Home", href: "#home" },
  { displayName: "About", href: "#about" },
  { displayName: "Projects", href: "#projects" },
  { displayName: "Blog", href: "/blog" },
];
