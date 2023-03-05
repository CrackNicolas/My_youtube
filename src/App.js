import ComponentHome from './components/layouts/home.js';
import ComponentWatch from './components/layouts/watch.js';
import './styles/App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <ComponentHome/> } />
        <Route exact path="/results" element={ <ComponentHome/> } />
        <Route exact path="/watch/:id" element={ <ComponentWatch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;