import { Link } from 'react-router-dom';
import Footer from "./Footer"
import '../Styles/HomePage.css';

export default function HomePage() {
    return (
        <div className='homePage'>
            <h1>memory puzzle game</h1>
            <div className='content'>
                <p>select a level:</p>
                <div className='cards-container'>
                    <div className='card easy'>
                        <h2>easy</h2>
                        <p>
                           in this level, the game be 4x4
                        </p>
                        <button>
                            <Link to="/game/easy" className='play-button-link'>
                                play it now
                            </Link>
                        </button>
                    </div>
                    <div className='card normal'>
                        <h2>normal</h2>
                        <p>
                           in this level, the game be 6x6
                        </p>
                        <button>
                            <Link to="/game/normal" className='play-button-link'>
                                play it now
                            </Link>
                        </button>
                    </div>
                    <div className='card hard'>
                        <h2>hard</h2>
                        <p>
                           in this level, the game be 8x8
                        </p>
                        <button>
                            <Link to="/game/hard" className='play-button-link'>
                                play it now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}