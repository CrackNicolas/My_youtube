import ComponentHome from './components/layouts/home.js';
import ComponentWatch from './components/layouts/watch.js';
import ComponentSearch from './components/layouts/search.js';
import ComponentHashtag from './components/layouts/hashtag.js';
import ComponentSinInternet from './components/layouts/sin_internet.js';
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
              <ComponentSearch/>
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
        <Route exact path="/hashtag/:name" element=
          { 
            <GlobalContextProvider>
              <ComponentHashtag/>
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/hashtag/:name/:shorts" element=
          { 
            <GlobalContextProvider>
              <ComponentHashtag/>
            </GlobalContextProvider>
          } 
        />
        <Route path="*" element={ <ComponentSinInternet/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;