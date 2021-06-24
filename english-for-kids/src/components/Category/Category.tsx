import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';
import './Category.scss';

export default function Category({ category }: { category: ICategory }) {
  return (
    <>
      <h1>Category page</h1>
      <div className="category">
        {
          category.cards?.map((card, index) => (
            <Card key={index} name={card.word} imageUrl={card.imageUrl} cards={category.cards} />
          ))
        }
      </div>
    </>
  );
}
