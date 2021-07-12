import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthContext from '../../context/AuthContext';
import CategoryCard from './CategoryCard';
import { ICategory } from '../../shared/models/category-model';
import './AdminPage.scss';

export default function AdminPanel() {
  let cards = useSelector(
    ({ categories }: { categories: { items: ICategory[] } }) => categories.items,
  );

  const auth = useContext(AuthContext);

  useEffect(() => {

  }, [cards])

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <>
      <header className="main-header">
        <h1>admin page</h1>
        <button
          className='button button-primary'
          onClick={logoutHandler}>
          Log out
        </button>
      </header>
      <main className='main'>
        <div className="admin-categories">
          {
            cards.map((card, index) => (
              <CategoryCard classNames='' key={index} {...card} {...card.cards[0]} onClick={() => { }} />
            ))
          }
        </div>
      </main>
    </>
  );
}
