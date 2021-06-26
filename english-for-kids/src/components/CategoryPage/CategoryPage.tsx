import { useSelector } from 'react-redux';
import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';
import './CategoryPage.scss';

export default function CategoryPage() {
  const category = useSelector((
    { categories, activeCategory }: { categories: { items: ICategory[] }; activeCategory: number },
  ) => categories.items[activeCategory]);

  const pronounceWord = (url: string) => {
    const audio = new Audio();
    audio.src = url;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <>
      <h1>Category page</h1>
      <div className="category">
        {
          category.cards.map((card, index) => (
            <Card key={index} {...category} {...card} onClick={() => pronounceWord(card.audio)} />
          ))
        }
      </div>
    </>
  );
}
