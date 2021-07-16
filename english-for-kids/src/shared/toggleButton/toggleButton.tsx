import './ToggleButton.scss';

export function ToggleButton({ onClick }: { onClick: () => void }) {
  return (
    <label className="switch" >
      <input type="checkbox" className="mode-checkbox" onClick={onClick} />
      <span className="slider round"></span>
      <span className="train-mode">Train</span>
      <span className="play-mode">Play</span>
    </label>
  );
}
