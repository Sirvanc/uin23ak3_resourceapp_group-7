import Nav from "./Nav"

export default function Layout({ children }) {
    return (
        <div id="container">
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

/**export default function Layout({}) { ... }: Dette definerer en 
 * funksjonskomponent kalt Layout som eksporteres som standard fra modulen.
 *  Denne komponenten tar ikke noen prop som argument.
return ( ... ): Dette er JSX som blir returnert av komponenten. 
Det er et enkelt div-element med id-en "container". 
Dette div-elementet utgjør hovedinnholdet i Layout-komponenten.
div id="container">...</div>: Dette er en <div>-element med id-attributtet satt til 
"container". All innholdet i Layout-komponenten er innenfor denne <div>-elementen.
<Nav />: Dette er en referanse til Nav-komponenten som ble importert tidligere.
 Denne komponenten vil rendres inn i Layout-komponenten på dette punktet.
<main>{children}</main>: Dette er en <main>-element som inneholder children-innholdet.
 children er det innholdet som er gitt som props til Layout-komponenten når den brukes. 
 Dette tillater Layout-komponenten å fungere som en layout-container for annet innhold som 
 skal rendres innenfor den.
 */