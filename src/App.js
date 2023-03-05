import Home from './components/layouts/home.js';
import Watch from './components/layouts/watch.js';
import './styles/App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/results" element={ <Home/> } />
        <Route exact path="/watch/:id" element={ <Watch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;