import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListMenu from './Pages/ListMenu';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<ListMenu/>} path='/list-menu'/>
    </Routes>
  );
}

export default App;
