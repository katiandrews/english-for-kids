import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import CategoryCard from './CategoryCard';
import { ICategory } from '../../shared/models/category-model';
import './AdminPage.scss';
import useHttp from '../../hooks/http.hook';
import setCategories from '../../redux/actions/setCategories';
import CardControl from '../../components/cardControl/cardControl';

export default function AdminPanel() {
  const dispatch = useDispatch();

  const cards = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );
  const auth = useContext(AuthContext);
  const { request } = useHttp();

  const logoutHandler = () => {
    auth.logout();
  };

  const deleteCategory = async (id: string) => {
    await request(`categories/${id}`, 'DELETE');
    const deleted = cards.findIndex((element) => element._id === id);
    cards.splice(deleted, 1);
    dispatch(setCategories([...cards]));
  };

  return (
    <>
      <header className="main-header">
        <ul className="pages">
          <Route path='/adminPanel'>
            <li className='active-page'>Categories</li>
            <li>Words</li>
          </Route>
          <Route path='/category/words'>
            <li>Categories</li>
            <li className='active-page'>Words</li>
          </Route>
        </ul>
        <button
          className='button button-primary'
          onClick={logoutHandler}>
          Log out
        </button>
      </header>
      <main className='main'>
        <div className="admin-categories">
          <CardControl />
          {
            cards.map((card, index) => (
              <CategoryCard classNames='' key={index + 1} {...card}
                {...card.cards[0]} onClick={() => { deleteCategory(card._id); }} />
            ))
          }
        </div>
      </main>
    </>
  );
}
