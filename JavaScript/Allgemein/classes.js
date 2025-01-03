const canvas = document.querySelector('canvas'); // definiert Variable mit konstantem Wert 

const ctx = canvas.getContext('2d'); // -"- , vorbestimmt 2d Zeichenelemente für das Canvas




ctx.canvas.width = document.documentElement.clientWidth;

ctx.canvas.height= document.documentElement. clientHeight;

const offset = { // Variable für die vorgenommene Verschiebung des Hintergrundes
    x: -210,
    y: -300
}

let Verschiebung = false 

var render = function (){

    ctx.canvas.width = document.documentElement.clientWidth * 0.7;

    ctx.canvas.height= document.documentElement. clientHeight * 0.8 ;

};

window.addEventListener("resize", render)

render()



class Sprite {
    constructor({ position, image, frames = { max: 1 }, sprites = [] })
    {
        this.position = position 
        this.image = image
        this.frames = {...frames, val: 0, elapsed:0 }

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height 
            
        }
        this.moving = false
        this.sprites = sprites
    }

    draw() {
        ctx.drawImage(
            this.image, // Bild Spieler zeichnen
            this.frames.val * this.width, // Startwert Zuschneiden x-Koordinate
            0, // Startwert Zuschneiden y-Koordinate
            this.image.width / this.frames.max, // Zuschneiden der Breite des Bildes (4 -> vier Figuren -> soll nur eine)
            this.image.height, // Zuschneiden Höhe des Bildes
    
            this.position.x,
            this.position.y,
            
           
            this.image.width / this.frames.max,  // "Echte" Breite Bild
            this.image.height // "Echte" Höhe Bild
    
            // Vier Argumente repäsentieren, "Echte" Eigenschaften Bild zeichnen 
        )

        if (!this.moving) return 

        

        if (this.frames.max > 1) {
            this.frames.elapsed++
        }

        if (this.frames.elapsed % 10 === 0) {
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0 

        }
 
    } 
}



class ZoneSchulhof {
    static width = 36
    static height = 36
    constructor({position}){
        this.position = position
        this.width = 36
        this.height = 36
    }



    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0)' // Farbe Kollisionsblöcke
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class ZoneFlur {
    static width = 72
    static height = 72
    constructor({position}){
        this.position = position
        this.width = 72
        this.height = 72
    }



    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0)' // Farbe Kollisionsblöcke
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class ZoneRaum {
    static width = 36
    static height = 36
    constructor({position}){
        this.position = position
        this.width = 36
        this.height = 36
    }



    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0)' // Farbe Kollisionsblöcke
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}