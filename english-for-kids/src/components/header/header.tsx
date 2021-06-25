import Menu from './menu/menu';
import './header.scss';
import ToggleButton from '../../shared/toggleButton/toggleButton';
import { useDispatch, useSelector } from 'react-redux';
import setMode from '../../redux/actions/setMode';

export default function Header() {
  const currentMode = useSelector(
    ({ trainMode }: { trainMode: boolean }) => trainMode);

  const dispatch = useDispatch();

  const changeModeOnToggle = () => {
    dispatch(setMode(!currentMode));
  }

  return (
    <header className='main-header'>
      <Menu />
      <ToggleButton onClick={changeModeOnToggle} />
    </header>
  );
}
