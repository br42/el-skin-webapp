import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import FaleConosco from './pages/FaleConosco';
import ErrorNotFound from './pages/ErrorNotFound';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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

export default App;
