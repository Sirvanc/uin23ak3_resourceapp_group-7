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
 */