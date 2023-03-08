import ComponentHome from './components/layouts/home.js';
import ComponentWatch from './components/layouts/watch.js';
import './styles/App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalContextProvider from './context/global_context.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element=
          { 
            <GlobalContextProvider>
              <ComponentHome/> 
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/results" element=
          { 
            <GlobalContextProvider>
              <ComponentHome/> 
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/watch/:id" element=
          { 
            <GlobalContextProvider>
              <ComponentWatch/> 
            </GlobalContextProvider>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;