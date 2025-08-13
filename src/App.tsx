import 'normalize.css';
import './App.css';
import CarrinhoContextProvider from 'context/CarrinhoContext';
import AppRouter from 'routes';
import { Provider } from 'react-redux';
import { store } from 'store';

function App() {
  return (
    <Provider store={store}>
      <>
        <CarrinhoContextProvider>
          <>
            <AppRouter/>
          </>
        </CarrinhoContextProvider>
      </>
    </Provider>
  );
}

export default App;
