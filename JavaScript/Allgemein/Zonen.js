
const SchulhofZonenMap = []

for(let i =  0; i < SchulhofZonenData.length; i+=70){// zur Erstellung von neuen Arrays für des Rechteck(Tile)
    SchulhofZonenMap.push(SchulhofZonenData.slice(i, 70 + i)) // fügt Array alle 70 Stellen ein Neues hinzu
} 

const SchulhofZonen = []

SchulhofZonenMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 2802)
        SchulhofZonen.push(new ZoneSchulhof({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneSchulhof.width - 10,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneSchulhof.height - 700// y-Koordinate Rechtecke Collisions + die Verschiebung
        
            
        }}))
    })

} )

// ------------------------------------------------------------------------------------------------------


const EingangSchulhofMap = []

for(let i =  0; i < EingangSchulhofData.length; i+=70){// zur Erstellung von neuen Arrays für des Rechteck(Tile)
    EingangSchulhofMap.push(EingangSchulhofData.slice(i, 70 + i)) // fügt Array alle 70 Stellen ein Neues hinzu
} 

const EingangZonen = []

EingangSchulhofMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 2802)
        EingangZonen.push(new ZoneSchulhof({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneSchulhof.width - 10,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneSchulhof.height - 710// y-Koordinate Rechtecke Collisions + die Verschiebung
        
            
        }}))
    })

} )

// -------------------------------------------------------------------------------------------------------------
const Flur1ZonenMap = []

for(let i =  0; i < Flur1ZonenData.length; i+=70){// zur Erstellung von neuen Arrays für des Rechteck(Tile)
    Flur1ZonenMap.push(Flur1ZonenData.slice(i, 70 + i)) // fügt Array alle 70 Stellen ein Neues hinzu
} 

const Flur1Zonen = []

Flur1ZonenMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 584)
        Flur1Zonen.push(new ZoneFlur({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneFlur.width  - 2800,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneFlur.height - 1520// y-Koordinate Rechtecke Collisions + die Verschiebung
        
            
        }}))
    })

} )


// ----------------------------------------------------------------------------------------------------------------

const Flur1ZonenVerschiebungMap = []

for(let i =  0; i < Flur1ZonenVerschiebungData.length; i+=70){// zur Erstellung von neuen Arrays für des Rechteck(Tile)
    Flur1ZonenVerschiebungMap.push(Flur1ZonenVerschiebungData.slice(i, 70 + i)) // fügt Array alle 70 Stellen ein Neues hinzu
} 

const Flur1ZonenVerschiebung = []

Flur1ZonenVerschiebungMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 584)
        Flur1ZonenVerschiebung.push(new ZoneFlur({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneFlur.width  - 2300,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneFlur.height - 1900// y-Koordinate Rechtecke Collisions + die Verschiebung
        
            
        }}))
    })

} )



// --------------------------------------------------------------------------------------------------------------

const Treppe1Map = []

for(let i =  0; i < Treppe1Data.length; i+=70){// zur Erstellung von neuen Arrays für des Rechteck(Tile)
    Treppe1Map.push(Treppe1Data.slice(i, 70 + i)) // fügt Array alle 70 Stellen ein Neues hinzu
} 

const Treppe1Zonen = []

Treppe1Map.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 3232)
        Treppe1Zonen.push(new ZoneFlur({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneFlur.width  - 2300,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneFlur.height - 1900// y-Koordinate Rechtecke Collisions + die Verschiebung
        
            
        }}))
    })

} )

console.log(Treppe1Zonen)


// -------------------------------------------------------------------------------------------------------------
const EingangRaum1Map = []

for(let i =  0; i < EingangRaum1Data.length; i+=70){// zur Erstellung von neuen Arrays für des Rechteck(Tile)
    EingangRaum1Map.push(EingangRaum1Data.slice(i, 70 + i)) // fügt Array alle 70 Stellen ein Neues hinzu
} 

const EingangRaum1Zonen = []

EingangRaum1Map.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 584)
        EingangRaum1Zonen.push(new ZoneFlur({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneFlur.width  - 2800,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneFlur.height - 1500// y-Koordinate Rechtecke Collisions + die Verschiebung
        
            
        }}))
    })

} )



// -----------------------------------------------------------------------------------------------------------------

const Raum1ZonenMap = [] // Erstellt neues Array 

for(let i =  0; i < Raum1ZonenData.length; i+=70){
    Raum1ZonenMap.push(Raum1ZonenData.slice(i, 70 + i)) 
}



const Raum1Zonen = []

Raum1ZonenMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 6609)
        Raum1Zonen.push(new ZoneRaum({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneRaum.width + offset.x -800,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneRaum.height + offset.y -1300// y-Koordinate Rechtecke Collisions + die Verschiebung
            //x: j * ZoneRaum.width + offset.x -560,
            //y: i * ZoneRaum.height + offset.y -450
        
            
        }}))
    })

} )



// ------------------------------------------------------------------------------------------------------------------
const Rätsel1ZonenMap = [] // Erstellt neues Array 

for(let i =  0; i < Rätsel1ZonenData.length; i+=70){
    Rätsel1ZonenMap.push(Rätsel1ZonenData.slice(i, 70 + i)) 
}



const Rätsel1Zonen = []

Rätsel1ZonenMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 4392)
        Rätsel1Zonen.push(new ZoneRaum({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneRaum.width + offset.x -800,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneRaum.height + offset.y -1300// y-Koordinate Rechtecke Collisions + die Verschiebung
            //x: j * ZoneRaum.width + offset.x -560,
            //y: i * ZoneRaum.height + offset.y -450
        
            
        }}))
    })

} )

// ------------------------------------------------------------------------------------------------------------

const Tür1ZonenMap = []

for(let i =  0; i < Tür1Data.length; i+=70){
    Tür1ZonenMap.push(Tür1Data.slice(i, 70 + i)) 
}

const Tür1Zonen = []


Tür1ZonenMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 4392)
        Tür1Zonen.push(new ZoneRaum({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            x: j * ZoneRaum.width + offset.x -800,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneRaum.height + offset.y -1300// y-Koordinate Rechtecke Collisions + die Verschiebung
            //x: j * ZoneRaum.width + offset.x -560,
            //y: i * ZoneRaum.height + offset.y -450
        
            
        }}))
    })

} )

// --------------------------------------------------------------------------------------------------------------

const AulaZonenMap = [] // Erstellt neues Array 

for(let i =  0; i < AulaZonenData.length; i+=70){
    AulaZonenMap.push(AulaZonenData.slice(i, 70 + i)) 
}



const AulaZonen = []

AulaZonenMap.forEach((row, i) => { // Schleife für jede Reihe, "i" ist der Index der jeweiligen Reihe
    row.forEach((symbol, j) => { // Schleife für jedes Element innerhalb einer Reihe, "j" ist der Index des jeweiligen Elements
        if (symbol === 432)
        AulaZonen.push(new ZoneRaum({position:{ // Erstellt neues Array mit x- u. y-Koordinate
            //x: j * ZoneRaum.width  -750 ,// x-Koordinate Rechtecke collisions + die Verschiebung
            //y: i * ZoneRaum.height  -800// y-Koordinate Rechtecke Collisions + die Verschiebung
            x: j * ZoneRaum.width - 50 ,// x-Koordinate Rechtecke collisions + die Verschiebung
            y: i * ZoneRaum.height  -1600// y-Koordinate Rechtecke Collisions + die Verschiebung
            
        }}))
    })

} )




// --------------------------------------------------------------------------------------------------------------
 
function rectangularCollision({rectangle1, rectangle2}){
    return(
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y 
    
    )

}