import { Router } from 'express';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Log from './src/login.jsx';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Log/>} />
    
 </Routes>
    
    </BrowserRouter>

  );
}

export default App;
