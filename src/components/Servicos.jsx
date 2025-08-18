import './Servicos.css'
import ImplantePhoto from '../assets/icons/Implante-Dentario.jpg'
import OrtodontiaPhoto from '../assets/icons/ortodontia.jpg'
import ClareamentoPhoto from '../assets/icons/clareamento.jpg'
import LimpezaPhoto from '../assets/icons/limpeza.jpg'
import EndodontiaPhoto from '../assets/icons/endodontia.webp'

function Servicos() {
    return (
        <div id="servicos">
            <h2>Nossos Serviços</h2>
            <div className="servicos_wrapper">
                <div className="servicos_card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <image href={ImplantePhoto} width="24" height="24" />
                    </svg>
                    <h3>Implantes Dentários</h3>
                    <p>Recupere a função e a estética do seu sorriso com implantes de alta qualidade.</p>
                </div>
                <div className="servicos_card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <image href={OrtodontiaPhoto} width="24" height="24" />
                    </svg>
                    <h3>Ortodontia</h3>
                    <p>Alinhamento perfeito do sorriso com aparelhos modernos e discretos.</p>
                </div>
                <div className="servicos_card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <image href={ClareamentoPhoto} width="24" height="24" />
                    </svg>
                    <h3>Clareamento Dental</h3>
                    <p>Conquiste um sorriso mais branco e radiante com nossas técnicas seguras.</p>
                </div>
                <div className="servicos_card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <image href={LimpezaPhoto} width="24" height="24" />
                    </svg>
                    <h3>Limpeza e Prevenção</h3>
                    <p>A base para uma saúde bucal duradoura, prevenindo problemas futuros.</p>
                </div>
                <div className="servicos_card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <image href={EndodontiaPhoto} width="24" height="24" />
                    </svg>
                    <h3>Endodontia</h3>
                    <p>A base para uma saúde bucal duradoura, prevenindo problemas futuros.</p>
                </div>
            </div>
        </div>
    )
}export default Servicos;