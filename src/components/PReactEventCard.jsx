import "./PReactEventCard.css";

const PReactEventCard = (eventProps) => {
    const {title, gunType, date, url, notes, location, level, slug} = eventProps;
    const pngPaths = {
        "Pistola": "/Pistola.png",
        "PCC": "/PCC.png",
        'Mini-Rifle': "/Mini-Rifle.png"
    };
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const pngPath = pngPaths[gunType];

    return <li className="link-card">
        <a href={`shootings/${slug}`} data-astro-prefetch>
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
                </div>
            </a>
    </li>;
}

export default PReactEventCard;
