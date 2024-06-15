import "./PReactEventCard.css";

const PReactEventCard = (eventProps) => {
    const {title, gunType, date, notes, location, level, slug} = eventProps;
    const pngPaths = {
        "Pistola": "/Pistola.png",
        "PCC": "/PCC.png",
        'Mini Rifle': "/Mini-Rifle.png"
    };
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: 'numeric',
    };
    const pngPath = pngPaths[gunType];

    return <>
        <li className="link-card">
            <div className="card-header">
                <h2>{title} <span>&rarr;</span></h2>
                <div className="image-container">
                    <img alt={gunType} src={pngPath} className="weapon-icon"/>
                </div>
            </div>
            <hr className="fancy-hr"/>
            <div className="card-body">
                <p><strong>Tipo de Arma:</strong> {gunType}</p>
                <p><strong>Fecha y Hora:</strong> {new Date(date).toLocaleDateString("es-ES", dateOptions)}</p>
                {notes && <p><strong>Notas:</strong> {notes}</p>}
                <p><strong>Ubicación:</strong> {location}</p>
                {level && <p><strong>Nivel:</strong> {level}</p>}
                <br/>
                <a href={`shootings/${slug}`} className={"btn"}>
                    Más información <span>&rarr;</span>
                </a>
            </div>
        </li>
    </>
}

export default PReactEventCard;
