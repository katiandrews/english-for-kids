import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import setCategory from '../../redux/actions/activeCategory';
import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';
import './MainPage.scss';

export default function Main() {
  const cards = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );

  const dispatch = useDispatch();

  const onSelectCategory = (index: number) => {
    dispatch(setCategory(index));
  };

  return (
    <>
      <h1 className='page-title'>Train & play</h1>
      <div className="categories">
        {
          cards.map((card) => (
            <Link to='/category' key={card.id}>
              <Card key={card.id} {...card} {...card.cards[0]} onClick={() => onSelectCategory(card.id)} />
            </Link>
          ))
        }
      </div>
    </>
  );
}