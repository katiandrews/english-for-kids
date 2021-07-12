import Button from "../../shared/Button/button";
import { IWord } from "../../shared/models/WordCard";
import DeleteIcon from '../../assets/img/delete.svg';

interface IProps {
  classNames: string;
  name: string;
  imageUrl: string;
  cards: IWord[];
  onClick: () => boolean | void,
}

export default function CategoryCard({
  classNames = '', name, imageUrl, cards, onClick,
}: IProps) {

  return (
    <div className='card'>
      <DeleteIcon onClick={onClick} className='delete-icon' />
      <div className="card-image" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className="card-description">
        <h2 className="card-name">{name}</h2>
        <span className="cards-quantity">Words: {cards.length}</span>
      </div>
    </div>
  )
}