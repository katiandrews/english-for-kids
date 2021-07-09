import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

export default function AdminPanel() {
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <div>
      <h1>admin page</h1>
      <button
        className='button button-primary'
        onClick={logoutHandler}
      >
        Log out
      </button>
    </div>
  );
}
