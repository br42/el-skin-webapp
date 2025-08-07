import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import BuscaContextProvider from 'context/BuscaContext';
import CarrinhoContextProvider from 'context/CarrinhoContext';
import AppRouter from 'routes';

const GlobalStyle = createGlobalStyle({});

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <CarrinhoContextProvider>
          <BuscaContextProvider>
            <AppRouter/>
          </BuscaContextProvider>
        </CarrinhoContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
