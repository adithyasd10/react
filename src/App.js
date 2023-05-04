import './App.css';
import Add from './components/Add';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom' 

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
