import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import { ICategory } from '../../shared/models/category-model';
import './AdminPage.scss';
import useHttp from '../../hooks/http.hook';
import setCategories from '../../redux/actions/setCategories';
import CardControl from '../../components/CardControl/CardControl';
import setCategory from '../../redux/actions/activeCategory';

interface IStateProperties {
  categories: { items: ICategory[] };
  activeCategory: number;
}

export default function AdminPanel() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cards } = useSelector(({ categories }: IStateProperties) => (
    {
      cards: categories.items,
    }));

  const { request } = useHttp();

  const deleteCategory = async (id: string, category: string) => {
    await request(`categories/${id}`, 'DELETE');
    await request(`words/?category=${category}`, 'DELETE');
    const deleted = cards.findIndex((element) => element._id === id);
    cards.splice(deleted, 1);
    dispatch(setCategories([...cards]));
  };

  const openWordsPage = async (index: number, name: string) => {
    dispatch(setCategory(index));
    history.push(`/${name}/words`);
  };

  return (
    <>
      <div className="admin-categories">
        <CardControl />
        {
          cards.map((card, index) => (
            <CategoryCard classNames='' key={index + 1} {...card}
              {...card.cards[0]} onDelete={() => { deleteCategory(card._id, card.name); }}
              Click={() => openWordsPage(index, card.name)} />
          ))
        }
      </div>
    </>
  );
}
