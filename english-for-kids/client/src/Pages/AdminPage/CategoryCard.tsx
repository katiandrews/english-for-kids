import { IWord } from "../../shared/models/WordCard";

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

export default function CategoryCard({
  classNames = '', name, imageUrl, cards, translation, word, wordImage, onClick,
}: IProps) {
  return (
    <div className={'card'}>
      <div className="card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className="card-description">
        <h2 className="card-name">{name}</h2>
        <span className="cards-quantity">{cards.length} cards</span>
      </div>
    </div>
  )
}