import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { ICategory } from '../../shared/models/category-model';
import './AdminHeader.scss';

interface IStateProperties {
  categories: { items: ICategory[] };
}

export default function AdminHeader() {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const categoriesCards = useSelector(({ categories }: IStateProperties) => categories.items);

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <header className="main-header">
      <ul className="pages">
        <Route path='/adminPanel'>
          <li className='active-page categories-link' onClick={() => history.push('/adminPanel')}>Categories</li>
          <li>Words</li>
        </Route>
        {
          categoriesCards.map((category, index) => (
            <Route path={`/${category.name}/words`} key={index} >
              <li className='categories-link' onClick={() => history.push('/adminPanel')}>Categories</li>
              <li className='active-page'>Words</li>
            </Route>
          ))
        }
      </ul>
      <button
        className='button button-primary'
        onClick={logoutHandler}>
        Log out
      </button>
    </header>
  );
}
