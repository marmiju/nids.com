import { BiCode, BiDetail } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaGraduationCap, FaMessage } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";

export type NavItem = {
  name: string;
  href?: string;
  icon?:React.ReactNode;
  children?: NavItem[];
};

export const NavLinks: NavItem[] = [
  { href: "/", icon:<FaHome/>, name: "Home" },
  { href: "/about",icon:<BiDetail/>, name: "About" },
  { href: "/admission",icon:<FaGraduationCap/>, name: "Addmission" },
  { href: "/programs",icon:<MdLocalOffer />, name: "Offer Programs" },
  { href: "/teachers",icon:<PiChalkboardTeacherFill />, name: "Teachers" },
  { href: "/notice",icon:<IoMdNotifications />, name: "Notice" },
  { href: "/message",icon:<FaMessage />, name: "Messages" },
  { href: "/ressearch",icon:<GiArchiveResearch />, name: "Research" },
  { href: "/contact",icon:<RiContactsFill/>, name: "contact" },
  { href: "/compete",icon:<BiCode/>, name: "contest" },

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



