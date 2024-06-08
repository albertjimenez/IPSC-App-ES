import React from "preact";
import type {EventProps} from "./models/EventCard.ts";
import "./ReactTSEventCard.css"

const ReactTSEventCard: React.FunctionalComponent<EventProps> = (eventProps: EventProps) => {
    const {name, tipoArma, datetime, url, notes, location, level} = eventProps;
    const pngPaths: { [key in EventProps['tipoArma']]: string } = {
        "Pistola": "/Pistola.png",
        "PCC": "/PCC.png",
        'Mini Rifle': "/Mini-Rifle.png"
    };
    const pngPath = pngPaths[tipoArma];

    return (
        <li className="link-card">
            <a href={url} target={'_blank'} rel={'noreferrer'}>
                <div className="card-header">
                    <h2>{name} <span>&rarr;</span></h2>
                    <div className="image-container">
                        <img alt={tipoArma} src={pngPath} className="weapon-icon"/>
                    </div>
                </div>
                <hr className="fancy-hr"/>
                <div className="card-body">
                    <p><strong>Tipo de Arma:</strong> {tipoArma}</p>
                    <p><strong>Fecha y Hora:</strong> {datetime.toLocaleString()}</p>
                    {notes && <p><strong>Notas:</strong> {notes}</p>}
                    <p><strong>Ubicación:</strong> {location}</p>
                    {level && <p><strong>Nivel:</strong> {level}</p>}
                </div>
            </a>
        </li>
    );
}

export default ReactTSEventCard;
