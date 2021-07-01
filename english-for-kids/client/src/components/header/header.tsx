import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Menu from './menu/menu';
import './header.scss';
import ToggleButton from '../../shared/toggleButton/toggleButton';
import setMode from '../../redux/actions/setMode';
import Button from '../../shared/Button/button';

export default function Header() {
  const dispatch = useDispatch();
  const currentMode = useSelector(
    ({ trainMode }: { trainMode: boolean }) => trainMode,
  );
  const history = useHistory();

  const changeModeOnToggle = () => {
    dispatch(setMode(!currentMode));
  };

  const openStatisticsPage = () => {
    history.push('/statistics');
  };

  return (
    <header className='main-header'>
      <Menu />
      <div className="button-container">
        <Button classNames='button-secondary' text={'Statistics'} onClick={openStatisticsPage} />
        <ToggleButton onClick={changeModeOnToggle} />
      </div>
    </header>
  );
}