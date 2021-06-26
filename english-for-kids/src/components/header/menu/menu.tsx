import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuIcon from '../../../assets/img/menu.svg';
import setCategory from '../../../redux/actions/activeCategory';
import MAIN_PAGE from '../../../shared/constants';
import { ICategory } from '../../../shared/models/category-model';
import './menu.scss';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<number>(MAIN_PAGE);

  const dispatch = useDispatch();
  const cards = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );

  const onSelectCategory = (index: number) => {
    if (index !== MAIN_PAGE) {
      dispatch(setCategory(index));
    }
    setActiveItem(index);
    setMenuOpen(false);
  };

  return (
    <div className="menu">
      <MenuIcon className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
      <nav className={menuOpen ? 'main-nav active' : 'main-nav'} onClick={() => setMenuOpen(false)}>
        <ul className='nav-list' onClick={(e) => e.stopPropagation()}>
          <Link to='/'>
            <li onClick={() => { onSelectCategory(MAIN_PAGE); }}
              className={activeItem === MAIN_PAGE ? 'nav-list-item active' : 'nav-list-item'}
            >Main page</li>
          </Link>
          <Link to='/category'>
            {
              cards.map((card, index) => (
                <li
                  onClick={() => onSelectCategory(index)}
                  className={activeItem === index ? 'nav-list-item active' : 'nav-list-item'}
                  key={`${card}_${index}`}>{card.name}
                </li>
              ))}
          </Link>
        </ul>
      </nav>
    </div >
  );
}
