import Footer from './Footer';
import '../Styles/LinksPage.css';

export default function Links() {
    return (
        <>
            <div className="linksPage">
                <h1>links</h1>
                <div className="links">
                    <h2>github account:</h2>
                    <a href="https://github.com/karas-naeem" className='link'>visit account</a>
                    <h2>leet code account:</h2>
                    <a href="https://leetcode.com/u/karasnaeem/" className='link'>visit account</a>
                </div>
            </div>
            <Footer />
        </>
    );
}