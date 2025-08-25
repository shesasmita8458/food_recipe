import logo from './logo.svg';
import './App.css';
import Mainpage from './mainpage';
import {Route,Routes } from 'react-router-dom';
import Mealinfo from './Mealinfo';


function App() {
  return (
    
      // <Mainpage/> 
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid'element={<Mealinfo/>}/>
    </Routes>
      
  );
}

export default App;
