import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Links from './Components/Links';
import './App.css';
import './Styles/scroll.css'
import './Styles/selection.css'
import About from './Components/About';
import NotFound from './Components/NotFound';

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
          <Route path='/' element={<HomePage/>}/>
          <Route path='/links' element={<Links/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*'  element={<NotFound/>}/>
      </Routes>
     </div>
  );
}

export default App;
