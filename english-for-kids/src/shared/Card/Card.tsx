import { useDispatch } from 'react-redux';
import setCategory from '../../redux/actions/activeCategory';
import { Route } from 'react-router-dom';
import { IWord } from '../models/WordCard';
import './Card.scss';

export default function Card({
  id, name, imageUrl, cards, translation, word, wordImage, onClick
}: {
  id: number;
  name: string,
  imageUrl: string,
  cards: IWord[],
  translation: string,
  word: string,
  wordImage: string,
  onClick: () => void
}) {

  return (
    <div className="card" onClick={onClick}>
      <Route path='/' exact >
        <div className="card-front">
          <div className="card-image" style={{ backgroundImage: `url('${imageUrl}')`, }}></div>
          <div className="card-description">
            <h2 className="card-name">{name}</h2>
            <span className="cards-quantity">{cards.length} cards</span>
          </div>
        </div>
      </Route>
      <Route path='/category' exact >
        <div className="card-front">
          <div className="card-image" style={{ backgroundImage: `url('${wordImage}')`, }}></div>
          <div className="card-description">
            <h2 className="card-name">{word}</h2>
          </div>
        </div>
        <div className="card-back">
          <div className="card-image" style={{ backgroundImage: `url('${wordImage}')`, }}></div>
          <div className="card-description">
            <h2 className="card-name">{translation}</h2>
          </div>
        </div>
      </Route>
    </div >
  );
}
