import { useEffect } from 'react';
import { Route, Router } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/Main/Main';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Statistics from './components/Statistics/Statistics';
import { ICategory } from './shared/models/category-model';
import { useDispatch } from 'react-redux';
import setCategories from './redux/actions/setCategories';
import setMode from './redux/actions/setMode';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('./db.json').then(async (resp) => {
      const { categories }: { categories: ICategory[] } = await resp.json();
      dispatch(setCategories(categories));
    });
  }, []);

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
