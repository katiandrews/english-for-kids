import { useDispatch, useSelector } from 'react-redux';
import Menu from './menu/menu';
import './header.scss';
import ToggleButton from '../../shared/toggleButton/toggleButton';
import setMode from '../../redux/actions/setMode';

export default function Header() {
  const dispatch = useDispatch();
  const currentMode = useSelector(
    ({ trainMode }: { trainMode: boolean }) => trainMode,
  );

  const changeModeOnToggle = () => {
    dispatch(setMode(!currentMode));
  };

  return (
    <header className='main-header'>
      <Menu />
      <ToggleButton onClick={changeModeOnToggle} />
    </header>
  );
}
