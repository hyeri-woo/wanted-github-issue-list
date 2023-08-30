import './App.css';
import store from './redux/store';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
