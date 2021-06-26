import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { IWord } from '../models/WordCard';
import './Card.scss';
import FlipIcon from '../../assets/img/flip.svg';

export default function Card({
  name, imageUrl, cards, translation, word, wordImage, onClick,
}: {
  name: string,
  imageUrl: string,
  cards: IWord[],
  translation: string,
  word: string,
  wordImage: string,
  onClick: () => void
}) {
  const currentMode = useSelector(
    ({ trainMode }: { trainMode: boolean }) => trainMode,
  );
  const [flipped, setFlipState] = useState(false);

  const flipCard = () => {
    setFlipState(!flipped);
  };

  const offCardHandler = () => {
    setFlipState(false);
  };

  const rightAnswerHandler = () => {

  };

  return (
    <div className={flipped ? 'card flipped' : 'card'} onMouseLeave={offCardHandler}>
      <Route path='/' exact >
        <div className="card-front" onClick={onClick}>
          <div className="card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
          <div className="card-description">
            <h2 className="card-name">{name}</h2>
            <span className={currentMode ? 'indicator train' : 'indicator play'}></span>
            <span className="cards-quantity">{cards.length} cards</span>
          </div>
        </div>
      </Route>
      <Route path='/category' exact >
        <div className={currentMode ? 'card-front train-mode' : 'card-front play-mode'}
          onClick={currentMode ? onClick : rightAnswerHandler}>
          <div className="card-image" style={{ backgroundImage: `url('${wordImage}')` }}></div>
          <div className="card-description">
            <h2 className="card-name">{word}</h2>
            <FlipIcon onClick={flipCard} />
          </div>
        </div>
        <div className="card-back train-mode">
          <div className="card-image" style={{ backgroundImage: `url('${wordImage}')` }}></div>
          <div className="card-description">
            <h2 className="card-name">{translation}</h2>
          </div>
        </div>
      </Route>
    </div >
  );
}
