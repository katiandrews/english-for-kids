import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import Statistics from './components/Statistics/Statistics';
import { ICategory } from './shared/models/category-model';

export default function App() {
  const [category, setCategory] = useState(0);
  const [cards, setCards] = useState<ICategory[]>([{
    "id": 0,
    "name": "",
    "imageUrl": "",
    "cards": []
  }]);

  useEffect(() => {
    fetch('./db.json').then(async (resp) => {
      const { categories } = await resp.json();
      setCards(categories);
    });
  }, []);

  return (
    <>
      <Header setCategory={setCategory} />
      <main className="main">
        <Route path='/' render={() => <Main items={cards} />} exact />
        <Route path='/category' render={() => <Category category={cards[category]} />} exact />
        <Route path='/statistics' component={Statistics} exact />
      </main>
    </>
  );
}


