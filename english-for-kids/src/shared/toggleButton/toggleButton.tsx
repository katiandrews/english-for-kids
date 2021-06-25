import { useDispatch, useSelector } from 'react-redux';
import setMode from '../../redux/actions/setMode';
import './toggleButton.scss';

export default function ToggleButton({ onClick }: { onClick: () => void }) {
  return (
    <label className="switch" onClick={onClick}>
      <input type="checkbox" className="mode-checkbox" />
      <span className="slider round"></span>
      <span className="train-mode">Train</span>
      <span className="play-mode">Play</span>
    </label>
  );
}
