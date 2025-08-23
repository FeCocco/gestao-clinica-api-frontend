import { Routes, Route, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import Header from "./components/Header";
import BotaoRoxo from "./components/BotaoRoxo/BotaoRoxo.jsx";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Especialistas from "./components/Especialistas.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";

function LayoutPrincipal() {
    const mobileNav = (closeMenu) => (
        <>
            <ul>
                <li><ScrollLink to="hero" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Início</ScrollLink></li>
                <li><ScrollLink to="servicos" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Serviços</ScrollLink></li>
                <li><ScrollLink to="especialistas" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Nossa Equipe</ScrollLink></li>
                <li><ScrollLink to="contato" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Contato</ScrollLink></li>
            </ul>
            <div className="header-actions-mobile">
                <a href="https://wa.me/551935247867" className="agendar-button">Agendar Avaliação</a>
                <Link to="/login" className='link-sistema' onClick={closeMenu}>Sistema</Link>
            </div>
        </>
    );

    return (
        <>
            <Header mobileContent={mobileNav}>
                <>
                    <nav className="desktop-nav">
                        <ul>
                            <li><ScrollLink to="hero" spy={true} smooth={true} offset={-90} duration={500}>Início</ScrollLink></li>
                            <li><ScrollLink to="servicos" spy={true} smooth={true} offset={-80} duration={500}>Serviços</ScrollLink></li>
                            <li><ScrollLink to="especialistas" spy={true} smooth={true} offset={-80} duration={500}>Nossa Equipe</ScrollLink></li>
                            <li><ScrollLink to="contato" spy={true} smooth={true} offset={-80} duration={500}>Contato</ScrollLink></li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <BotaoRoxo />
                    </div>
                </>
            </Header>
            <Hero />
            <Servicos />
            <Especialistas />
            <Contato />
            <Footer />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutPrincipal />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
} export default App;