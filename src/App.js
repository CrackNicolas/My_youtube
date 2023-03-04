import Explore from './components/layouts/explore.js';
import './styles/App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Explore/> } />
        <Route exact path="/results" element={ <Explore/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;