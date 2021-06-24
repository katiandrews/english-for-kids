import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../../assets/img/menu.svg';
import './menu.scss';

export default function Menu({ navItems, setCategory }: {
  navItems: string[]; setCategory: React.Dispatch<React.SetStateAction<number>>
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<number>(100);

  const selectMenuItem = (index: number) => {
    setActiveItem(index);
    setCategory(index);
    setMenuOpen(false);
  };

  return (
    <div className="menu">
      <MenuIcon className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
      <nav className={menuOpen ? 'main-nav active' : 'main-nav'} onClick={() => setMenuOpen(false)}>
        <ul className='nav-list' onClick={(e) => e.stopPropagation()}>
          <Link to='/'>
            <li onClick={() => { selectMenuItem(100); }}
              className={activeItem === 100 ? 'nav-list-item active' : 'nav-list-item'}
            >Main page</li>
          </Link>
          <Link to='/category'>
            {
              navItems.map((item, index) => (
                <li
                  onClick={() => selectMenuItem(index)}
                  className={activeItem === index ? 'nav-list-item active' : 'nav-list-item'}
                  key={`${item}_${index}`}>{item}
                </li>
              ))}
          </Link>
        </ul>
      </nav>
    </div >
  );
}
