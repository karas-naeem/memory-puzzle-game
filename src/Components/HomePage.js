import { Link } from 'react-router-dom';
import '../Styles/HomePage.css';

export default function HomePage()
{
    return (
        <div className='home'>  
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
                    in this level, the game be 9x9
                    </p> 
                    <button>
                        <Link to="/game/hard" className='play-button-link'>
                            play it now
                        </Link>                    
                    </button>
                </div>
                </div>
            </div>
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
        </div>
    )
}