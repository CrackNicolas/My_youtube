import ComponentHome from './components/layouts/home.js';
import ComponentLogaut from './components/layouts/logaut.js';
import ComponentWatch from './components/layouts/watch.js';
import ComponentSearch from './components/layouts/search.js';
import ComponentHashtag from './components/layouts/hashtag.js';
import ComponentShorts from './components/layouts/shorts.js';
import ComponentSubscriptions from './components/layouts/subscriptions.js';
import ComponentLibrary from './components/layouts/library.js';
import ComponentChannels from './components/layouts/channels.js';
import ComponentPlaylist from './components/layouts/playlist.js';
import ComponentSinInternet from './components/layouts/sin_internet.js';

import './styles/global.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalContextProvider from './context/global_context.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/logaut" element=
          { 
            <ComponentLogaut/>
          } 
        />
        <Route exact path="/" element=
          { 
            <GlobalContextProvider>
              <ComponentHome/> 
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/:channel_user" element=
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
        <Route exact path="/shorts" element=
          { 
            <GlobalContextProvider>
              <ComponentShorts/>
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/shorts/:name/:id" element=
          { 
            <GlobalContextProvider>
              <ComponentShorts/>
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/feed/subscriptions" element=
          { 
            <GlobalContextProvider>
              <ComponentSubscriptions/>
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/feed/library" element=
          { 
            <GlobalContextProvider>
              <ComponentLibrary/>
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/feed/channels" element=
          { 
            <GlobalContextProvider>
              <ComponentChannels/>
            </GlobalContextProvider>
          } 
        />
        <Route exact path="/playlist/:list" element=
          { 
            <GlobalContextProvider>
              <ComponentPlaylist/>
            </GlobalContextProvider>
          } 
        />
        <Route path="*" element={ <ComponentSinInternet/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;