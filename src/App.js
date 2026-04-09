import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import './App.css';
import './Styles/scroll.css'

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
      </Routes>
     </div>
  );
}

export default App;
