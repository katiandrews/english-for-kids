import { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/auth.hook';
import { useHttp } from '../../hooks/http.hook';
import './LoginForm.scss';

interface IProps {
  classNames: string;
  close: () => void;
}

export default function LoginForm({ classNames, close }: IProps) {
  const [form, setForm] = useState({
    email: '', password: ''
  })
  const { loading, error, request } = useHttp();
  const loginForm = useRef<HTMLDivElement>(null);
  const { token, login, logout, userId } = useAuth();

  const closeForm: MouseEventHandler = (e) => {
    if (e.target instanceof HTMLDivElement) {
      if (loginForm.current && e.target === loginForm.current) {
        close();
      }
    }
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await request('login', 'POST', { ...form });
      login(data.token, data.userId);
    } catch (error) { }
  }

  return (
    <div ref={loginForm} className={`login-background ${classNames}`} onClick={closeForm}>
      <div className='login-form'>
        <h2>Login</h2>
        <span>Чтобы войти, введите следующие данные: <br />
          login:<b>admin@mail.ru</b>, password:<b>admin</b></span>
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
  )

}