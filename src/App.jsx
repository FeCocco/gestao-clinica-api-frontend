import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Especialistas from "./components/Especialistas.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function LayoutPrincipal() {
    return (
        <>
            <Header />
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
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
} export default App;