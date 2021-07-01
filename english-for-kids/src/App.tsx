import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/header';
import Main from './components/MainPage/MainPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Statistics from './components/Statistics/Statistics';
import { ICategory } from './shared/models/category-model';
import setCategories from './redux/actions/setCategories';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('./db.json').then(async (resp) => {
      const { categories }: { categories: ICategory[] } = await resp.json();
      dispatch(setCategories(categories));
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="main">
        <Route path='/' component={Main} exact />
        <Route path='/category' component={CategoryPage} exact />
        <Route path='/statistics' component={Statistics} exact />
      </main>
    </>
  );
}
