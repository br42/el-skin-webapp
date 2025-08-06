//import { Provider } from 'react-redux';
//import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';

const Provedores = ({ children } : { children: ReactNode }) => (
  //<Provider store={store}>
  <BrowserRouter>
    {children}
  </BrowserRouter>
  //</Provider>
);

export const renderComProvedores = (ui: ReactNode, options: RenderOptions) =>
  render(ui, {
    wrapper: Provedores,
    ...options,
  });

export * from '@testing-library/react';

export { renderComProvedores as render };