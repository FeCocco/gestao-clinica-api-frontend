import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Especialistas from "./components/Especialistas.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function LayoutPrincipal(){
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

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPrincipal />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}export default App;