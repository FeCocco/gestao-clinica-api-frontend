import './Especialistas.css'

function Especialistas() {
    return (
        <div id="especialistas" className="especialistas">
            <h2 className="section-title">Conheça Nossas Especialistas</h2>
            <div className="team-grid">
                <div className="dentist-card">
                    <img src="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?text=Dra.+Ana"
                         alt="Foto da Dra. A"/>
                    <h3>Dra. A</h3>
                    <p>Clínica Geral e Estética</p>
                </div>
                <div className="dentist-card">
                    <img src="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?text=Dra.+Beatriz"
                         alt="Foto da Dra. B"/>
                    <h3>Dra. B</h3>
                    <p>Ortodontia</p>
                </div>
                <div className="dentist-card">
                    <img src="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?text=Dra.+Carla"
                         alt="Foto da Dra. C"/>
                    <h3>Dra. C</h3>
                    <p>Implantodontia e Prótese</p>
                </div>
            </div>
        </div>
    )
}export default Especialistas;