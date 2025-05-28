import React from 'react';
import { navLinks } from '../../Data/Navlink';
import "./Sidebar.css";


const Sidebar = () => {
  return (
   <aside className="sidebar">
    <div className='nav-cont'>
      {navLinks.map((section, index) => (
        <div key={index} className="nav-section">
          {section.section && <p className="nav-title">{section.section}</p>}
          {section.links.map((link, indx) => (
            <div key={indx} className="nav-link">
              <i size={18}>{link.icon}</i>
              <span>{link.label}</span>
            </div>
          ))}
        </div>
      ))}
      </div>
    </aside>
  )
}

export default Sidebar