


const AulaBackgroundImage = new Image(); // erstellt HTML Tag
AulaBackgroundImage.src = './img/Räume/Aula/Aula.png'; // Konstante wird mit Bild belegt



const AulaHintergrund = new Sprite ({
    position: {
    //x: -750,
    //y: -800
    x: -50,
    y: -1600
    
    },
    image: AulaBackgroundImage

})

const AulaVordergrundImage = new Image(); // erstellt HTML Tag
AulaVordergrundImage.src = './img/Räume/Aula/AulaVordergrund.png'; // Konstante wird mit Bild belegt



const AulaVordergrund = new Sprite ({
    position: {
    //x: -750,
    //y: -800
    x: -50,
    y: -1600
    
    },
    image: AulaVordergrundImage

})






function animateAula(){

    document.querySelector('#Titel').style.display ='none'
    
    document.querySelector('#IDtimer').style.display = 'none'

    document.querySelector('#AuswahlID').style.display = 'none'

    document.querySelector('#Interface').style.display = 'none'

    const animationAulaId = window.requestAnimationFrame(animateAula)

    if (Handy){
        document.querySelector('#movingInterface').style.display ='block'
    }
    else {
        document.querySelector('#movingInterface').style.display ='none'
    }

    AulaHintergrund.draw()

    
    AulaZonen.forEach((ZoneRaum) => {
        ZoneRaum.draw()
    })

    player.draw()

    AulaVordergrund.draw()

    moving = true

    
    player.moving = false



    
   

    if (keys.w.pressed || movingtouchUp) {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x,
                        y: AulaZone.position.y + 3
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        

        if (moving)
            movables.forEach((movable) => {
                movable.position.y += 3
            })
    

    
    } else if (keys.a.pressed || movingtouchLeft) {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x + 3,
                        y: AulaZone.position.y
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x += 3
            })
       
        


    } else if (keys.s.pressed || movingtouchDown) {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x,
                        y: AulaZone.position.y - 3
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.y -= 3
            })

       

    } else if (keys.d.pressed || movingtouchRight) {
        player.moving = true
        player.image = player.sprites.right
        for (let i = 0; i < AulaZonen.length; i++) {
            const AulaZone = AulaZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...AulaZone, position: {
                        x: AulaZone.position.x - 3,
                        y: AulaZone.position.y
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
    }
}

//animateAula()