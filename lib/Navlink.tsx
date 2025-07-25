export type NavItem = {
  name: string;
  href?: string;
  children?: NavItem[];
};

export const NavLinks: NavItem[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/admission", name: "Addmission" },
  { href: "/programs", name: "Offer Programs" },
  { href: "/teachers", name: "Teachers" },
  { href: "/notice", name: "Notice" },
  { href: "/ressearch", name: "Research" },
  { href: "/contact", name: "contact" },
  { href: "/compete", name: "contest" },

];




// export const Navlink = () => {
//   const link = [
//     { path: "/", name: "Home" },
//     { path: "/about", name: "About" },
//     { path: "/admission", name: "Addmission" },
//     { path: "/programs", name: "Offer Programs" },
//     { path: "/teachers", name: "Teachers" },
//     { path: "/notice", name: "Notice" },
//     { path: "/ressearch", name: "Research" },
//     { path: "/contact", name: "contact" },
//     { path: "/compete", name: "contest" },
//   ];
//   return link;
// };



