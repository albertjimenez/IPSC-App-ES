import {useState} from 'preact/hooks';
import "./ReactCardBoxLayout.css";
import PReactEventCard from "./PReactEventCard.jsx";


export default function ReactCardBoxLayout({cards = []}) {
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
        <hr className="fancy-hr"/>
        <ul role="list" className="link-card-grid">
            {cards.filter(ev => {
                if (!ev.telephoneNumber && !ev.url && !ev.email)
                    throw new Error("A post should contain either a 'telephoneNumber' or a 'url' or an 'email'");
                const fields = [ev.title, ev.location, ev.gunType];
                if (terms && terms.length > 0)
                    return fields.some(f => f?.trim().normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(terms.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()));
                return true
            }).sort((a, b) => {
                if (a.date < b.date)
                    return -1;
                if (a.date > b.date)
                    return 1;
                return 0;
            }).map((eventProps => (
                <PReactEventCard {...eventProps}></PReactEventCard>
            )))}
        </ul>
    </>
}
