import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import './HeaderEffect.css';
import logo from '../assets/mini-logo.png';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header-effect-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-content-container">
                <header className="header-container">
                    <img src={logo} alt="CliniCare Logo" className="header-logo" />
                    <nav>
                        <ul>
                            <li>
                                <Link to="hero" spy={true} smooth={true} offset={-90} duration={500}>Início</Link>
                            </li>
                            <li>
                                <Link to="servicos" spy={true} smooth={true} offset={-80} duration={500}>Serviços</Link>
                            </li>
                            <li>
                                <Link to="especialistas" spy={true} smooth={true} offset={-80} duration={500}>Nossa Equipe</Link>
                            </li>
                            <li>
                                <Link to="contato" spy={true} smooth={true} offset={-80} duration={500}>Contato</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <Link to="contato" spy={true} smooth={true} offset={-80} duration={500} className="agendar-button">
                            Agendar Avaliação
                        </Link>
                        <a href="" className='link-sistema'>Sistema</a>
                    </div>
                </header>
            </div>
        </div>
    );
}export default Header;