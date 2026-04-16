import { Link } from "react-router-dom";
import Footer from "./Footer"
import '../Styles/NotFoundPage.css'

export default function NotFound({
    suggestionsText,
    suggestions
}) {
    return (
        <div className="NotFoundPage">
            <h1>404 | pag not found</h1>
            <div className="content">
                <p>
                    {suggestionsText}
                </p>
                <ul>
                    {
                        suggestions.map((e, i) => {
                            return (
                                <li>
                                    <button>
                                        <Link to={e.link} className="button-link">{e.name}</Link>
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <Footer />
        </div>
    )
}