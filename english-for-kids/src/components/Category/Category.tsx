import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';
import './Category.scss';

export default function Category({ category, setCategory }: {
  category: ICategory;
  setCategory: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <>
      <h1>Category page</h1>
      <div className="category">
        {
          category.cards?.map((card, index) => (
            <Card key={index} id={category.id} name={card.word}
              imageUrl={card.imageUrl} cards={category.cards} setCategory={setCategory} />
          ))
        }
      </div>
    </>
  );
}
