import {useState} from 'preact/hooks';
import "./ReactCardBoxLayout.css";
import PReactEventCard from "./PReactEventCard.jsx";
import {cards} from "../data/cards.ts";


export default function ReactCardBoxLayout() {
    const [terms, setTerms] = useState("");
    return <>
        <label>
            <input
                type="search"
                id="input-filter"
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
                <PReactEventCard {...eventProps}></PReactEventCard>
            )))}
        </ul>
    </>
}
