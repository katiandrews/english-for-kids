import { useSelector } from "react-redux";
import WordControl from "../../components/WordControl/WordControl";
import { ICategory } from "../../shared/models/category-model";
import WordCard from "./WordCard";
import './WordsPage.scss'

interface IStateProperties {
  categories: { items: ICategory[] };
  activeCategory: number;
}

export default function () {
  const category = useSelector(({ categories, activeCategory }: IStateProperties) => (
    categories.items[activeCategory]
  ));

  return (
    <div className="words-page">
      <WordControl />
      {
        category.cards.map((card, index) => (
          <WordCard key={index} {...card} onClick={() => { }} onDelete={() => { }}
          />))
      }
    </div>
  )
}