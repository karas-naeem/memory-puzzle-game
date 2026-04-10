import '../Styles/LinksPage.css';
import Footer from './Footer';

export default function Links()
{
    return <>
            <div className="links-page">
            <h1>Links</h1>
            <div className="links">
                <h2>github account:</h2>
                <a href="https://github.com/karas-naeem" className='link'>visit account</a>
                <h2>leet code account:</h2>
                <a href="https://leetcode.com/u/karasnaeem/" className='link'>visit account</a>
            </div>
        </div>
        <div className='footer-container'>
            <Footer/>
        </div>
    </>
}