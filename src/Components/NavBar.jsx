import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'

export default function NavBar() {
    return (
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
    );
}