import './App.css';
import store from './redux/store';
import router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
