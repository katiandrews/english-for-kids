import { Route } from 'react-router-dom';
import { useState } from 'react';
import { IWord } from '../models/WordCard';
import './Card.scss';

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
  const [flipped, setFlipState] = useState(false);

  const flipCard = () => {
    setFlipState(!flipped);
  };

  const offHandler = () => {
    setFlipState(false);
  };

  return (
    <div className={flipped ? 'card flipped' : 'card'} onMouseLeave={offHandler}>
      <Route path='/' exact >
        <div className="card-front" onClick={onClick}>
          <div className="card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
          <div className="card-description">
            <h2 className="card-name">{name}</h2>
            <span className="cards-quantity">{cards.length} cards</span>
          </div>
        </div>
      </Route>
      <Route path='/category' exact >
        <div className="card-front train-mode" onClick={onClick}>
          <div className="card-image" style={{ backgroundImage: `url('${wordImage}')` }}></div>
          <div className="card-description">
            <h2 className="card-name">{word}</h2>
            <img src="https://image.flaticon.com/icons/png/512/1330/1330172.png" alt="" width="24"
              onClick={flipCard} />
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
