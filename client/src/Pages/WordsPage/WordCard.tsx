import DeleteIcon from '../../assets/img/delete.svg';
import PlayIcon from '../../assets/img/play-button.png';
import { Button } from '../../shared/Button/Button';

interface IProps {
  word: string;
  wordImage: string;
  audio: string;
  translation: string;
  onDelete: () => void;
}

export function WordCard({
  word, wordImage, audio, translation, onDelete,
}: IProps) {
  const playAudio = (url: string) => {
    const wordAudio = new Audio();
    wordAudio.src = url;
    wordAudio.currentTime = 0;
    wordAudio.play();
  };

  return (
    <div className='card'>
      <DeleteIcon className='delete-icon' onClick={onDelete} />
      <div className="card-image" style={{ backgroundImage: `url('${wordImage}')` }}></div>
      <ul className="card-description">
        <li className="card-info-item"><b>Word:</b> {word}</li>
        <li className="card-info-item"><b>Translation:</b> {translation}</li>
        <li className="card-info-item audio-item" onClick={() => playAudio(audio)} >
          <b>Audio:</b>
          <img src={PlayIcon} alt="play" /> Play
        </li>
      </ul>
      <Button classNames='button-secondary'
        text='Update' onClick={() => { }} />
    </div>
  );
}
