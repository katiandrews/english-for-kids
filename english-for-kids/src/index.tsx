import ReactDOM from 'react-dom';
import './style.scss';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
