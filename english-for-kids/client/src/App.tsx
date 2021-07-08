import { createContext, useEffect, useRef, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/header';
import Main from './components/MainPage/MainPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Statistics from './components/Statistics/Statistics';
import { ICategory } from './shared/models/category-model';
import setCategories from './redux/actions/setCategories';
import AdminPanel from './components/AdminPanel/AdminPanel';
import LoginForm from './shared/LoginForm/LoginForm';
import { useAuth } from './hooks/auth.hook';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('./db.json').then(async (resp) => {
      const { categories }: { categories: ICategory[] } = await resp.json();
      dispatch(setCategories(categories));
    });
  }, [dispatch]);

  const authContext = createContext({
    token: '',
    userId: '',
    login: (jwtToken: string, id: any) => { },
    logout: () => { },
    isAuthenticated: false
  })

  const [formState, setFormState] = useState(false);
  const { token, login, logout, userId } = useAuth();

  const isAuthenticated = !!token;

  const openLoginForm = () => {
    setFormState(true);
  }

  const closeLoginForm = () => {
    setFormState(false);
  }

  if (isAuthenticated) {
    return (
      <authContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
        <Route path='/adminPanel' component={AdminPanel} exact />
        <Redirect to='/adminPanel' />
      </authContext.Provider >
    )
  }
  return (
    <authContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
      <Header onLoginClick={openLoginForm} />
      <main className="main">
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/category' component={CategoryPage} exact />
          <Route path='/statistics' component={Statistics} exact />
          <Redirect to='/' />
        </Switch>
      </main>
      <LoginForm classNames={formState ? '' : 'visually-hidden'} close={closeLoginForm} />
    </authContext.Provider >
  );
}

