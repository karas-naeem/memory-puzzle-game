import '../Styles/AboutPage.css';
import Footer from './Footer';

export default function About() {

    return (
        <>
            <div className='about'>
                <h1>about</h1>
                <div>
                    <h2>fonts</h2>
                    <h3>bricolage grotesque</h3>
                    <h3>rubik</h3>
                    <a href="https://ateliertriay.github.io/bricolage/" className='link'>
                        visit source
                    </a>
                    <a href="https://fonts.google.com/specimen/Rubik" className='link'>
                        visit source
                    </a>
                </div>
                <div style={{
                    margin: "-20vh"
                }}>
                    <h2>Pictures</h2>
                    <h3 style={{
                        gridColumn: "span 4 / span 4"
                    }}>game pictures</h3>
                    <a href="https://github.com/karas-naeem/memory-puzzle-game/blob/main/ABOUT.md" className='link' title='this link is link to the file that that contain all pictures links and it source and it author' style={{
                        gridColumn: "span 4 / span 4"
                    }}>
                        visit source
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}