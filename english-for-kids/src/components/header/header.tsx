import Menu from './menu/menu';
import './header.scss';
import ToggleButton from '../../shared/toggleButton/toggleButton';

export default function Header({ setCategory }: { setCategory: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <header className='main-header'>
      <Menu
        setCategory={setCategory}
        navItems={['Animals', 'Emotions', 'Flowers', 'Professions', 'Nature', 'Home']} />
      <ToggleButton />
    </header>
  );
}
