import './App.css';
import BuscaContextProvider from 'context/BuscaContext';
import CarrinhoContextProvider from 'context/CarrinhoContext';
import AppRouter from 'routes';

function App() {
  return (
    <CarrinhoContextProvider>
      <BuscaContextProvider>
        <AppRouter/>
      </BuscaContextProvider>
    </CarrinhoContextProvider>
  );
}

export default App;
