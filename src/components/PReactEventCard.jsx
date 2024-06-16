import "./PReactEventCard.css";

const PReactEventCard = (eventProps) => {
    const {title, gunType, date, notes, location, level, slug, mapsURL} = eventProps;
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

    const generateMapLink = () => {
        if (!mapsURL)
            return <></>
        return <p>
            <strong>Maps: </strong>
            <a href={mapsURL} className="map-button" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://icons.iconarchive.com/icons/alecive/flatwoken/128/Apps-Google-Maps-icon.png"
                    width="24" height="24" alt="map"
                />
                <span>Google Maps</span>
            </a>
        </p>
    }

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
                {generateMapLink()}
                <a href={`shootings/${slug}`} className={"btn"}>
                    Más información <span>&rarr;</span>
                </a>
            </div>
        </li>
    </>
}

export default PReactEventCard;
