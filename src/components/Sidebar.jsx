import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // icon ბიბლიოთეკა

const Sidebar = () => {
  const menu = [
    { icon: <FaHome />, label: 'React' },
    { icon: <FaUser />, label: 'Angular' },
    { icon: <FaCog />, label: 'Vue' },
  ];

  return (
    // <h2>Hello</h2>
    <aside className="sidebar">
      <h2 className="sidebar-title">MyApp</h2>
      <nav className="sidebar-menu">
        {menu.map((item, index) => (
          <button key={index} className="sidebar-item">
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
