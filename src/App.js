import React from 'react';
import PokeList from './components/PokeList';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Layout
 from './components/Layout';
 import MyFavourites from './components/MyFavourites';
 import './App.css';


const App = () => {
  return (
  <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="pokelist" element={<PokeList />}/>
          <Route path="myfavourites" element={<MyFavourites />}/>
        </Route>
     </Routes>
  </BrowserRouter>
  );
};
 
export default App;