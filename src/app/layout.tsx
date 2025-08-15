'use client';

import { store } from '@/store';
import { Provider } from 'react-redux';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/normalize.css';
import '@/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Provider store={store}>
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </Provider>
    </html>
  );
}
