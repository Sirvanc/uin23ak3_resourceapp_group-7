import { Link, useParams } from 'react-router-dom';
import { useState } from 'react'
import { resources } from '../assets/ressurser';


export default function Nav() {
    const { slug } = useParams()
    const [active, setActive] = useState()
    console.log("current slug: ", slug)

    const handleButtonClick = (category) => {
        setActive(category);
    };

    return (
        <>
            <nav>
                <ul>
                    {resources.map((item, index) => (
                        <button key={index + 'category'} className={active === item.category ? 'active' : null} onClick={() => handleButtonClick(item.category)}>
                            <Link to={"/" + item.category.replaceAll(" ", "-")} className={active === item.category ? 'active' : null}>{item.category}</Link>
                        </button>
                    ))}
                </ul>

            </nav>
        </>
    )
}

/**
 * export default function Nav() { ... }: Dette definerer en funksjonskomponent kalt Nav som 
 * eksporteres som standard fra modulen. Dette betyr at når denne modulen importeres andre steder,
 *  vil Nav være standard eksporten.const {slug} = useParams(): 
 * Dette bruker React-router sin useParams() krok for å hente ut en
 parameter fra URL-en. Den antar at det er en slug-parameter i URL-en.
const [active, setActive] = useState(): Dette initialiserer en lokal tilstand i komponenten. 
active vil holde den aktive kategorien i navigasjonsmenyen, og setActive vil være funksjonen 
som brukes til å oppdatere verdien til active.
console.log("current slug: ", slug): Dette logger verdien av slug til konsollen. 
Dette kan være nyttig for feilsøking for å se hva som er den gjeldende slug-verdien.
return ( ... ): Dette er JSX som blir returnert av komponenten. 
Det inneholder en nav-element med en liste (ul) av kategorier.
{resources.map((item, index) => <li key={index+"category"}>
<Link to={"/"+item.category.replaceAll(" ", "-")} 
className={active === item? "active" : null}>{item.category}</Link></li>)}: 
Dette er en dynamisk generering av li elementer basert på resources-arrayen.
 For hver item i resources, opprettes en li med en Link (antatt å være fra React-router)
  som peker til en bestemt rute basert på kategorien til item. 
  Hvis active-tilstanden samsvarer med item, får lenken klassen "active". 
  key-verdien brukes for å hjelpe React med riktig re-rendring av komponenten.
Det virker som om resources ikke er definert direkte i denne koden, så det må
 være definert et sted utenfor denne komponenten, antakelig som en prop eller globalt definert variabel

 */