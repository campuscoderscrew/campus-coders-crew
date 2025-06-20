import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

// import Crew from './src/pages/Crew';
import Crew from '../src/pages/crew';
import Home from '../src/pages/home';
import Requests from './pages/Requests'

import './app.css';
import { Header } from './components/Header';
import { Events } from './pages/Events';
import Archive from './pages/Archive';
import Projects from './pages/Projects';
import SinglePage from './pages/SinglePage';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="singlepage" element = {<SinglePage/>} />
      <Route path="/ccc" element={<Home />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/requests" element={<Requests/>}/>
      <Route path='/events' element={<Events />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);