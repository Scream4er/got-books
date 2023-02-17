import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BooksPage, CharacterPage, HousesPage} from './components/pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/characters' element={<CharacterPage />}/>
      <Route path='/houses' element={<HousesPage />}/>
      <Route path='/books' exact element={<BooksPage />}/>

    </Routes>
  </BrowserRouter>
);
