import { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import './LoginForm.scss';

interface IProps {
  classNames: string;
  close: () => void;
}

export default function LoginForm({ classNames, close }: IProps) {
  const loginForm = useRef<HTMLDivElement>(null);

  const closeForm: MouseEventHandler = (e) => {
    if (e.target instanceof HTMLDivElement) {
      if (loginForm.current && e.target === loginForm.current) {
        close();
      }
    }
  }

  return (
    <div ref={loginForm} className={`login-background ${classNames}`} onClick={closeForm}>
      <div ref={loginForm} className='login-form'>
        <h2>Login</h2>
        <form action="" className="form-content">
          <label htmlFor="">
            Login <br />
            <input type="text" />
          </label>
          <label htmlFor="">
            Password <br />
            <input type="password" />
          </label>
        </form>
      </div>
    </div>
  )

}