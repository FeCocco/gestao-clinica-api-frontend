import './Especialistas.css'
import ImplantePhoto from "../assets/icons/Implante-Dentario.jpg";

function Especialistas() {
    return (
        <div id="especialistas">
            <h2>Conheça Nossas Especialistas</h2>
            <div className="especialistas-wrap">
                <div className="especialistas-card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <img src="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?text=Dra.+Ana"
                             alt="Foto da Dra. A"/>
                    </svg>
                    <h3>Dra. A</h3>
                    <p>Clínica Geral e Estética</p>
                </div>
                <div className="especialistas-card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <img src="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?text=Dra.+Beatriz"
                             alt="Foto da Dra. B"/>
                    </svg>
                    <h3>Dra. B</h3>
                    <p>Ortodontia</p>
                </div>
                <div className="especialistas-card">
                    <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <img src="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?text=Dra.+Carla"
                             alt="Foto da Dra. C"/>
                    </svg>
                    <h3>Dra. C</h3>
                    <p>Implantodontia e Prótese</p>
                </div>
            </div>
        </div>
    )
}export default Especialistas;