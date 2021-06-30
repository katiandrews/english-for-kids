import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { IWord } from '../models/WordCard';
import './Card.scss';
import FlipIcon from '../../assets/img/flip.svg';

interface IProps {
  classNames: string;
  name: string;
  imageUrl: string;
  cards: IWord[];
  translation: string;
  word: string;
  wordImage: string;
  onClick: () => boolean | void,
}

export default function Card({
  classNames = '', name, imageUrl, cards, translation, word, wordImage, onClick,
}: IProps) {
  const isTrainMode = useSelector(
    ({ trainMode }: { trainMode: boolean }) => trainMode,
  );
  const thisCard = useRef<HTMLDivElement>(null);
  const [flipped, setFlipState] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const flipCard = () => {
    setFlipState(!flipped);
  };

  const offCardHandler = () => {
    setFlipState(false);
  };

  return (
    <div className={flipped ? 'card flipped' : 'card'} onMouseLeave={offCardHandler}>
      <Route path='/' exact >
        <div className="card-front" onClick={onClick}>
          <div className="card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
          <div className="card-description">
            <h2 className="card-name">{name}</h2>
            <span className={isTrainMode ? 'indicator train' : 'indicator play'}></span>
            <span className="cards-quantity">{cards.length} cards</span>
          </div>
        </div>
      </Route>
      <Route path='/category' exact >
        <div ref={thisCard}
          className={`card-front ${isTrainMode ? 'train-mode' : 'play-mode'} ${classNames}`}
          onClick={!disabled ? onClick : () => { }}>
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
