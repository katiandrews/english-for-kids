import './Main.scss';
import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';

export default function Main({ items }: { items: ICategory[] | undefined }) {
  return (
    <>
      <h1 className='page-title'>Train & play</h1>
      <div className="categories">
        {
          items?.map((card) => (
            <Card key={card.id} {...card} />
          ))
        }
      </div>
    </>
  );
}
