import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {Provider} from 'react-redux';
import store from './redux/store';
import {viewPortHeight} from './helpers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
viewPortHeight();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
