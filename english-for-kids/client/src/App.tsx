import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/header';
import Main from './Pages/MainPage/MainPage';
import Footer from './components/footer/footer';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import Statistics from './Pages/Statistics/Statistics';
import setCategories from './redux/actions/setCategories';
import AdminPanel from './Pages/AdminPage/AdminPage';
import LoginForm from './components/LoginForm/LoginForm';
import useAuth from './hooks/auth.hook';
import AuthContext from './context/AuthContext';
import useHttp from './hooks/http.hook';

export default function App() {
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    request('categories', 'GET').then((categories) => {
      dispatch(setCategories(categories));
    })
  }, [request]);

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
        <Route path='/adminPanel' component={AdminPanel} exact />
        <Redirect to='/adminPanel' />
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
