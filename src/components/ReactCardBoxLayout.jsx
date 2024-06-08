import {useState} from 'preact/hooks';
import "./ReactCardBoxLayout.css";
import ReactTSEventCard from "./ReactTSEventCard.tsx";


export default function ReactCardBoxLayout() {
    const cards = [
        {
            name: 'Torneo Nacional',
            tipoArma: 'Pistola',
            datetime: new Date('2024-06-01'),
            url: 'https://example.com/torneo-nacional',
            notes: 'Registro abierto hasta el 25 de mayo.',
            location: 'Madrid, España',
            level: 'Nacional'
        },
        {
            name: 'Curso de Tiro Práctico',
            tipoArma: 'Mini Rifle',
            datetime: new Date('2024-06-15'),
            url: 'https://example.com/curso-tiro',
            notes: 'Inscripción obligatoria.',
            location: 'Barcelona, España'
        },
        {
            name: 'Competición Regional',
            tipoArma: 'PCC',
            datetime: new Date('2024-07-20'),
            url: 'https://example.com/competicion-regional',
            notes: 'Traer equipo completo.',
            location: 'Sevilla, España',
            level: 'Regional'
        }
    ];
    const [terms, setTerms] = useState("");
    return <>
        <label>
            <input
                type="search"
                className={"styled-input"}
                name="search"
                placeholder={"Escribe aquí para filtrar eventos"}
                value={terms}
                onInput={e => {
                    e.preventDefault();
                    setTerms(e.target.value)
                }}
            />
        </label>
        <ul role="list" className="link-card-grid">
            {cards.filter(ev => {
                const fields = [ev.name, ev.location, ev.tipoArma];
                if (terms && terms.length > 0)
                    return fields.some(f => f?.trim().toLowerCase().includes(terms.trim().toLowerCase()));
                return true
            }).map((eventProps => (
                <ReactTSEventCard {...eventProps}></ReactTSEventCard>
            )))}
        </ul>
    </>
}
