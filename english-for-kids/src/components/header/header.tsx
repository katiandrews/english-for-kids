import Menu from './menu/menu';
import './header.scss';
import ToggleButton from '../../shared/toggleButton/toggleButton';

export default function Header() {
  return (
    <header className='main-header'>
      <Menu
        onClickItem={(item) => console.log(item)}
        navItems={['Main page', 'Animals', 'Emotions', 'Flowers', 'Professions', 'Nature', 'Home']} />
      <ToggleButton />
    </header>
  );
}
