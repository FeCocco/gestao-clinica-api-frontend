import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // visualizacao de mes
import timeGridPlugin from '@fullcalendar/timegrid'; // visualizacao de semana/dia
import interactionPlugin from '@fullcalendar/interaction'; // para interações como clique
import './AgendaCalendario.css'

function AgendaCalendario() {
    // Estado para armazenar os eventos
    const [eventos, setEventos] = useState([]);

    //buscar os dados quando o componente carregar
    useEffect(() => {
        // ---SIMULACAO DE BUSCA NO BACKEND ---

        const agendamentosDoBackend = [
            {
                id: '1',
                title: 'Consulta - João Silva (Dr. Ana)',
                start: '2025-08-19T10:30:00',
                end: '2025-08-19T11:30:00'
            },
            {
                id: '2',
                title: 'Limpeza - Maria Oliveira (Dr. Carlos)',
                start: '2025-08-20T14:00:00',
                end: '2025-08-20T15:00:00',
                color: '#28a745'
            }
        ];

        setEventos(agendamentosDoBackend);
    }, []);

    //const handleEventClick = (clickInfo) => {
        // Exibe um alerta com informações do evento ao ser clicado
        //alert(`Agendamento: ${clickInfo.event.title}\nInício: ${clickInfo.event.start.toLocaleString()}`);
    //};

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={eventos}
                //eventClick={}
                editable={true}
                selectable={true}
                allDaySlot={false}
                locale='pt-br'
                slotMinTime="07:00:00"
                slotMaxTime="19:00:00"
                buttonText={{
                    today: 'Hoje',
                    month: 'Mês',
                    week: 'Semana',
                    day: 'Dia'
                }}
                businessHours={{
                    daysOfWeek: [ 1, 2, 3, 4, 5],
                    startTime: '08:00',
                    endTime: '18:00'
                }}
            />
        </div>
    );
} export default AgendaCalendario;