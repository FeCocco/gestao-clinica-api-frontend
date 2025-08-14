import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {Link} from 'react-router-dom';
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
                                <ScrollLink to="hero" spy={true} smooth={true} offset={-90} duration={500}>Início</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="servicos" spy={true} smooth={true} offset={-80} duration={500}>Serviços</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="especialistas" spy={true} smooth={true} offset={-80} duration={500}>Nossa Equipe</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="contato" spy={true} smooth={true} offset={-80} duration={500}>Contato</ScrollLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <a href="https://wa.me/551935247867" className="agendar-button">
                            Agendar Avaliação
                        </a>
                        <Link to="/login" className='link-sistema'>Sistema</Link>
                    </div>
                </header>
            </div>
        </div>
    );
}export default Header;