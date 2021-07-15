import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Menu from './Menu/Menu';
import './header.scss';
import setMode from '../../redux/actions/setMode';
import Button from '../../shared/Button/button';
import ToggleButton from '../../shared/ToggleButton/toggleButton';

interface IProps {
  onLoginClick: () => void;
}

export default function Header({ onLoginClick }: IProps) {
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
        <Button classNames='button-primary' text='Login' onClick={onLoginClick}></Button>
        <Button classNames='button-secondary' text={'Statistics'} onClick={openStatisticsPage} />
        <ToggleButton onClick={changeModeOnToggle} />
      </div>
    </header>
  );
}
