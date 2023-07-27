
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Emplo from './Components/Addemployee/Emplo'
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
               <Route path='/emplo' element={<Emplo/>}></Route>
          </Routes>
      </BrowserRouter>
      
   
    </div>
  );
}

export default App;
