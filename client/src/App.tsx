// import react
import React, { useEffect } from 'react';
// import components
import StorePage from './pages/StorePage';
import FavoritePage from './pages/FavoritePage';
import ProfilePage from './pages/ProfilePage';
// import style
import './assets/styles/global.scss';
// import rest
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StorePage />} />
          <Route path='/favorites' element={<FavoritePage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
