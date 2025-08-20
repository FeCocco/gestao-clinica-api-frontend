import AgendaCalendario from '../components/AgendaCalendario';

// Importe um arquivo CSS para estilizar a página (melhor prática)
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1>Agenda de Consultas</h1>
            <div className="calendario-wrapper">
                <AgendaCalendario />
            </div>
        </div>
    );
} export default Dashboard;