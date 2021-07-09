import {
  MouseEventHandler, useContext, useRef, useState,
} from 'react';
import AuthContext from '../../context/AuthContext';
import useHttp from '../../hooks/http.hook';
import './LoginForm.scss';

interface IProps {
  classNames: string;
  close: () => void;
}

export default function LoginForm({ classNames, close }: IProps) {
  const [form, setForm] = useState({
    email: '', password: '',
  });
  const [errorNotify, setError] = useState({ display: false, message: '' });
  const { loading, request } = useHttp();
  const loginForm = useRef<HTMLDivElement>(null);
  const auth = useContext(AuthContext);

  const closeForm: MouseEventHandler = (e) => {
    if (e.target instanceof HTMLDivElement) {
      if (loginForm.current && e.target === loginForm.current) {
        close();
        setError({ display: false, message: '' });
      }
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request('login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (error) { setError({ display: true, message: error.message }); }
  };

  return (
    <div ref={loginForm} className={`login-background ${classNames}`} onClick={closeForm}>
      <div className='login-form'>
        <h2>Login</h2>
        <span>Чтобы войти, введите следующие данные: <br />
          login:<b>admin@mail.ru</b>, password:<b>admin</b></span>
        <p className={errorNotify.display ? 'form-error' : 'visually-hidden'}>{errorNotify.message}</p>
        <form action="" className="form-content">
          <label htmlFor="">
            Login <br />
            <input
              type="text"
              name='email'
              onChange={changeHandler} />
          </label>
          <label htmlFor="">
            Password <br />
            <input
              type="password"
              name='password'
              onChange={changeHandler} />
          </label>
          <button
            className='button button-primary'
            disabled={loading}
            onClick={loginHandler}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
