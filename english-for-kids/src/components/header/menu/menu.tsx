import { useState } from 'react';
import MenuIcon from '../../../assets/menu.svg';
import './menu.scss';

export default function Menu({ navItems, onClickItem }: { navItems: string[], onClickItem: (item: string) => void; }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="menu">
      <MenuIcon className="menu-icon" onClick={() => setMenuActive(!menuActive)} />
      <nav className={menuActive ? 'main-nav active' : 'main-nav'}>
        <ul className='nav-list'>
          {
            navItems.map((item, index) => (
              <li
                onClick={() => onClickItem(item)}
                className='nav-list-item' key={`${item}_${index}`}>{item}
              </li>
            ))}
        </ul>
      </nav>
    </div >
  );
}
