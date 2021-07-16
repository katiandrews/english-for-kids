import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main } from './components/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
import { CategoryPage } from './components/CategoryPage/CategoryPage';
import { Statistics } from './components/Statistics/Statistics';
import { ICategory } from './shared/models/category-model';
import setCategories from './redux/actions/setCategories';
import { Header } from './components/Header/Header';

export function App() {
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
      <Footer />
    </>
  );
}
