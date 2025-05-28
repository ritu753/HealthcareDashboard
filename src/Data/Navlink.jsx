import { MdDashboard } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { FaFolderPlus } from "react-icons/fa6";
import { PiChartLineFill } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
export const navLinks = [
  { section: "General", links: [
    { label: "Dashboard", icon: <MdDashboard /> },
    { label: "History", icon: <LuArrowDownUp /> },
    { label: "Calendar", icon: <FaCalendarDays /> },
    { label: "Appointments", icon: <FaFolderPlus /> },
    { label: "Statistics", icon: <PiChartLineFill /> },

  ]},
  { section: "Tools", links: [
    { label: "Chat", icon: <IoChatbubbleEllipsesOutline /> },
    { label: "Support", icon: <BsFillTelephoneFill /> },
  ]},
  { section: "", links: [
    { label: "Setting", icon:<IoSettingsSharp /> },
  ]}
];
