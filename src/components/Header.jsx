import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Header.css';
import './HeaderEffect.css';
import logo from '../assets/mini-logo.png';
import BotaoRoxo from "./BotaoRoxo/BotaoRoxo.jsx";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`header-component-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className={`header-effect-wrapper ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-content-container">
                    <header className="header-container">
                        <img src={logo} alt="CliniCare Logo" className="header-logo"/>
                        <nav className="desktop-nav">
                            <ul>
                                <li><ScrollLink to="hero" spy={true} smooth={true} offset={-90}
                                                duration={500}>Início</ScrollLink></li>
                                <li><ScrollLink to="servicos" spy={true} smooth={true} offset={-80}
                                                duration={500}>Serviços</ScrollLink></li>
                                <li><ScrollLink to="especialistas" spy={true} smooth={true} offset={-80} duration={500}>Nossa
                                    Equipe</ScrollLink></li>
                                <li><ScrollLink to="contato" spy={true} smooth={true} offset={-80}
                                                duration={500}>Contato</ScrollLink></li>
                            </ul>
                        </nav>
                        <div className="header-actions">
                            <BotaoRoxo/>
                            <Link to="/login" className='link-sistema'>Sistema</Link>
                        </div>
                    </header>
                </div>
            </div>

            <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
            </div>

            <div className={`backdrop ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

            <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><ScrollLink to="hero" spy={true} smooth={true} offset={-90} duration={500}
                                    onClick={closeMenu}>Início</ScrollLink></li>
                    <li><ScrollLink to="servicos" spy={true} smooth={true} offset={-80} duration={500}
                                    onClick={closeMenu}>Serviços</ScrollLink></li>
                    <li><ScrollLink to="especialistas" spy={true} smooth={true} offset={-80} duration={500}
                                    onClick={closeMenu}>Nossa Equipe</ScrollLink></li>
                    <li><ScrollLink to="contato" spy={true} smooth={true} offset={-80} duration={500}
                                    onClick={closeMenu}>Contato</ScrollLink></li>
                </ul>
                <div className="header-actions-mobile">
                    <a href="https://wa.me/551935247867" className="agendar-button">Agendar Avaliação</a>
                    <Link to="/login" className='link-sistema' onClick={closeMenu}>Sistema</Link>
                </div>
            </nav>
        </div>
    );
} export default Header;