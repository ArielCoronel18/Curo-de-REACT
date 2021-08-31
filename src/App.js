import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import { Header, Footer } from './components/common';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Routes />
      </div>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  )
};

export default App;
