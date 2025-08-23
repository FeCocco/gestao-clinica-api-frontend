function EspacialistasCard(props) {
    return (
        <div className="especialistas_card">
            <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <img src={props.FotoDra}
                     alt="Foto da Dra. A"/>
            </svg>
            <h3>{props.NomeDra}</h3>
            <p>{props.FuncaoDra}</p>
        </div>
    )
} export default EspacialistasCard;