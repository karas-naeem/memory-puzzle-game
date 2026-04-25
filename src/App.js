import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Links from './Components/LinksPage';
import About from './Components/AboutPage';
import NotFound from './Components/NotFoundPage';
import Game from './Components/GamePage';
import NavBar from './Components/NavBar';
import './App.css';
import './Styles/scroll.css'
import './Styles/selection.css'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/links' element={<Links />} />
        <Route path='/about' element={<About />} />
        <Route path='/game/:type' element={<Game />} />
        <Route path='*' element={
          <NotFound
            suggestionsText="Oops! page is not found. often you write URL wrong.you can switch to one of them pages:"
            suggestions={[
              {
                name: "Home Page",
                link: "/"
              },
              {
                name: "Links",
                link: "/Links"
              },
              {
                name: "About",
                link: "/about"
              }
            ]} />} />
      </Routes>
    </div>
  );
}

export default App;
