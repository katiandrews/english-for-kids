import './toggleButton.scss';

export default function ToggleButton() {
  return (
    <label className="switch">
      <input type="checkbox" className="mode-checkbox" />
      <span className="slider round"></span>
      <span className="train-mode">Train</span>
      <span className="play-mode">Play</span>
    </label>
  );
}
