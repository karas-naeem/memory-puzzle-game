import '../Styles/AboutPage.css';
import Footer from './Footer';

export default function About()
{
    return (
        <>
        <div className='about'>
            <h1>about</h1>
            <div>
                <h2>fonts</h2>
                <h3>bricolage grotesque</h3>
                <h3>rubik</h3>        
                <a href="https://ateliertriay.github.io/bricolage/" className='link'>
                    <span className='about-link link'>
                            visit source
                    </span>
                </a>    
                <a href="https://fonts.google.com/specimen/Rubik" className='link'>
                    <span className='about-link'>
                            visit source
                    </span>
                </a>
            </div>
        </div>
            <div className='footer-container'>
                <Footer/> 
            </div>
        </>
    );
}