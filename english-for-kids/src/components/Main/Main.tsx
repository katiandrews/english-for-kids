import { Link } from 'react-router-dom';
import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';
import './Main.scss';

export default function Main({ items, setCategory }: {
  items: ICategory[] | undefined;
  setCategory: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <>
      <h1 className='page-title'>Train & play</h1>
      <div className="categories">

        {
          items?.map((card) => (
            <Link to='/category' key={card.id}>
              <Card key={card.id} {...card} setCategory={setCategory} />
            </Link>
          ))
        }
      </div>
    </>
  );
}
