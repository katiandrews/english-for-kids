import { Route } from "react-router-dom";
import { IWord } from "../models/WordCard";
import './Card.scss';

export default function Card({ name, imageUrl, cards }: { name: string, imageUrl: string, cards: IWord[] }) {
  return (
    <div className="card">
      <Route path='/' exact >
        <div className="card-front">
          <img src={imageUrl} alt="" className="card-image" />
          <div className="card-description">
            <h2 className="card-name">{name}</h2>
            <span className="cards-quantity">{cards.length} cards</span>
          </div>
        </div>
      </Route>
      <Route path='/category' exact >
        <div className="card-front">
          <img src={imageUrl} alt="" className="card-image" />
          <div className="card-description">
            <h2 className="card-name">{name}</h2>
          </div>
        </div>
        <div className="card-back">
          <div className="card-img"></div>
          <div className="card-description">
            <h2 className="card-name"></h2>
          </div>
        </div>
      </Route>
    </div >
  );
}
