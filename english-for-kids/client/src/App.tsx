import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Main from './Pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import Statistics from './Pages/Statistics/Statistics';
import setCategories from './redux/actions/setCategories';
import AdminPanel from './Pages/AdminPage/AdminPage';
import LoginForm from './components/LoginForm/LoginForm';
import useAuth from './hooks/auth.hook';
import AuthContext from './context/AuthContext';
import useHttp from './hooks/http.hook';
import { ICategory } from './shared/models/category-model';
import WordsPage from './Pages/WordsPage/WordsPage';
import AdminHeader from './components/AdminHeader/AdminHeader';

interface IStateProperties {
  categories: { items: ICategory[] };
}

export default function App() {
  const dispatch = useDispatch();
  const { request } = useHttp();

  const categoriesCards = useSelector(({ categories }: IStateProperties) => categories.items);

  useEffect(() => {
    request('categories', 'GET').then((categories) => {
      dispatch(setCategories(categories));
    });
  }, [request, dispatch]);

  const [formState, setFormState] = useState(false);
  const {
    token, login, logout, userId,
  } = useAuth();
  const isAuthenticated = !!token;

  useEffect(() => {
    setFormState(false);
  }, [isAuthenticated]);

  const openLoginForm = () => {
    setFormState(true);
  };

  const closeLoginForm = () => {
    setFormState(false);
  };

  if (isAuthenticated) {
    return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated,
      }}>
        <AdminHeader />
        <main className="main">
          <Switch>
            <Route path='/adminPanel' component={AdminPanel} exact />
            {
              categoriesCards.map((category, index) => (
                <Route path={`/${category.name}/words`} component={WordsPage} key={index} />
              ))
            }
            <Redirect to='/adminPanel' />
          </Switch>
        </main>
        <Footer />
      </AuthContext.Provider >
    );
  }
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated,
    }}>
      <Header onLoginClick={openLoginForm} />
      <main className="main">
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/category' component={CategoryPage} exact />
          <Route path='/statistics' component={Statistics} exact />
          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
      <LoginForm classNames={formState ? '' : 'visually-hidden'} close={closeLoginForm} />
    </AuthContext.Provider >
  );
}
