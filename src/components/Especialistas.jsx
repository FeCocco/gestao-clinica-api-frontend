import './Especialistas.css'
import EspecialistasCard from "./EspecialistasCard/EspecialistasCard.jsx";

function Especialistas() {
    return (
        <div id="especialistas">
            <h2>Conheça Nossas Especialistas</h2>
            <div className="especialistas_wrap">
                <EspecialistasCard
                    FotoDra="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?"
                    NomeDra="Dra A"
                    FuncaoDra="Clínica Geral e Estética"
                />
                <EspecialistasCard
                    FotoDra="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?"
                    NomeDra="Dra B"
                    FuncaoDra="Ortodontia"
                />
                <EspecialistasCard
                    FotoDra="https://via.placeholder.com/300x400.png/a7a7a7/ffffff?"
                    NomeDra="Dra C"
                    FuncaoDra="Implantodontia e Prótese"
                />
            </div>
        </div>
    )
}export default Especialistas;