import { render } from 'react-dom';
import './css/index.css';
import routes from './router';

render(
  routes,
  document.getElementById('root')
);
