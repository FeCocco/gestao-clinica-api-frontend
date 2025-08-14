import './Servicos.css'

function Servicos() {
    return (
        <div id="servicos" className="servicos">
            <h2 className="section-title">Nossos Serviços</h2>
            <div className="servicos__wrapper">
                <div className="servicos__card">
                    <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                    <h3>Implantes Dentários</h3>
                    <p>Recupere a função e a estética do seu sorriso com implantes de alta qualidade.</p>
                </div>
                <div className="servicos__card">
                    <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                    <h3>Ortodontia</h3>
                    <p>Alinhamento perfeito do sorriso com aparelhos modernos e discretos.</p>
                </div>
                <div className="servicos__card">
                    <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                    <h3>Clareamento Dental</h3>
                    <p>Conquiste um sorriso mais branco e radiante com nossas técnicas seguras.</p>
                </div>
                <div className="servicos__card">
                    <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                    <h3>Limpeza e Prevenção</h3>
                    <p>A base para uma saúde bucal duradoura, prevenindo problemas futuros.</p>
                </div>
                <div className="servicos__card">
                    <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                    <h3>Endodontia</h3>
                    <p>A base para uma saúde bucal duradoura, prevenindo problemas futuros.</p>
                </div>
            </div>
        </div>
    )
}export default Servicos;