import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Links from './Components/Links';
import './App.css';
import './Styles/scroll.css'
import './Styles/selection.css'
import About from './Components/About';
import NotFound from './Components/NotFound';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" className='link'>
              home
            </Link>
          </li>
          <li>
            <Link to="/links" className='link'>
              links
            </Link>
          </li>
          <li>
            <Link to="/about" className='link'>
              about
            </Link>
          </li>
        </ul>
      </nav>
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
                link: "about"
              }
            ]} />} />
      </Routes>
    </div>
  );
}

export default App;
