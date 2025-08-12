// # import './App.css';
import { ThemeProvider } from 'styled-components';
import BuscaContextProvider from 'context/BuscaContext';
import CarrinhoContextProvider from 'context/CarrinhoContext';
import AppRouter from 'routes';
// # import 'styles/normalize.css';
import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
