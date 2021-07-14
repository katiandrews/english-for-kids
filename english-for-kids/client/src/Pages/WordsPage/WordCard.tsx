import { useState } from 'react';
import DeleteIcon from '../../assets/img/delete.svg';
import Button from '../../shared/Button/button';

interface IProps {
  word: string;
  wordImage: string;
  audio: string;
  translation: string;
  onDelete: () => void;
  onClick: () => void;
}

export default function WordCard({ word, wordImage, audio, translation }: IProps) {
  const [edit, setEdit] = useState(false);

  return (
    <div className='card'>
      <DeleteIcon className='delete-icon' />
      <div className="card-image" style={{ backgroundImage: `url('${wordImage}')` }}></div>
      <div className="card-description">
        <h2 className="card-name">{word}</h2>
      </div>
      <div className="buttons">
        <Button classNames='button-secondary'
          text='Update' onClick={() => setEdit(true)} />
      </div>
    </div>
  );
}