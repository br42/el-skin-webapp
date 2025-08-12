import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Home from 'pages/Home/Home';
import Sobre from 'pages/Sobre/Sobre';
import FaleConosco from 'pages/FaleConosco/FaleConosco';
import ErrorNotFound from 'pages/ErrorNotFound/ErrorNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const routerFutureConfig = {
  v7_relativeSplatPath: true,
  v7_startTransition: true,
  v7_fetcherPersist: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_skipActionErrorRevalidation: true,
};

export default function AppRouter() {
  return (
    <BrowserRouter future={routerFutureConfig}>
      <div className="AppRouter">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/faleconosco" element={<FaleConosco/>} />
          <Route path="*" element={<ErrorNotFound/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
