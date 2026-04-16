import { Link } from "react-router-dom";
import '../Styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <ul className='list'>
                <li>
                    <ul>
                        <p>pages</p>
                        <li>
                            <Link to="/" className='link'>
                                main page
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <p>infos</p>
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
                </li>
            </ul>
        </footer>
    )
}