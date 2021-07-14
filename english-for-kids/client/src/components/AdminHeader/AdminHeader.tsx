import { useContext } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import './AdminHeader.scss';

export default function AdminHeader() {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <header className="main-header">
      <ul className="pages">
        <Route path='/adminPanel'>
          <li className='active-page' onClick={() => history.push('/adminPanel')}>Categories</li>
          <li>Words</li>
        </Route>
        <Route path={'/words'}>
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
  )
}