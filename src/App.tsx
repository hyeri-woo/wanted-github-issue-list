import './App.css';
import store from './redux/store';
import router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
