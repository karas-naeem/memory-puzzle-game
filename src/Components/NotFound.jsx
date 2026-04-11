import { Link } from "react-router-dom";
import Footer from "./Footer"
import '../Styles/NotFoundPage.css'

export default function NotFound()
{
    return ( <div className="NotFoundPage">
        <h1>404 | pag not found</h1>
        <div className="content">
            <p>Oops! page is not found. often you write URL wrong.you can switch to one of them pages:</p>
            <ul>
                <li>
                    <button>
                        <Link to="/" className="button-link">Home Page</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/links" className="button-link">Links</Link>
                    </button>
                </li>
                <li style={{
                    gridColumn:"span 2 / span 2"
                }}>  
                    <button>
                        <Link to="/about" className="button-link">About</Link>
                    </button>
                </li>
            </ul>
        </div>
        <div className="footer-container">
            <Footer/>           
        </div>
    </div>)
}