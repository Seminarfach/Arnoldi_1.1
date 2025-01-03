
const Raum1BackgroundImage = new Image(); // erstellt HTML Tag
Raum1BackgroundImage.src = './img/Räume/Raum1/KlassenraumSpiel.png'; // Konstante wird mit Bild belegt


const Raum1Background = new Sprite({
    position: {
       
       x: offset.x - 800,
       y: offset.y - 1300
       //x: offset.x -560,
       //y: offset.y - 450

      
    },
    image: Raum1BackgroundImage

})

const Raum1VordergrundImage = new Image(); // erstellt HTML Tag
Raum1VordergrundImage.src = './img/Räume/Raum1/Raum1Vordergrund.png'; // Konstante wird mit Bild belegt


const Raum1Vordergrund = new Sprite({
    position: {
       
       x: offset.x - 800,
       y: offset.y - 1300,
       //x: offset.x -560,
       //y: offset.y - 450

      
    },
    image: Raum1VordergrundImage

})

const riddle ={
    initiated: false
}

function initRiddle(){

    document.querySelector('#Interface').style.display = 'none'

    document.querySelector('#movingInterface').style.display = 'none'

}




function animateRaum1(){

    
    document.querySelector('#Titel').style.display ='none'

    document.querySelector('#IDtimer').style.display = 'none'

    document.querySelector('#AuswahlID').style.display = 'none'

    document.querySelector('#Interface').style.display = 'none'

    const animationRaum1Id = window.requestAnimationFrame(animateRaum1)

    if (Handy){
        document.querySelector('#movingInterface').style.display ='block'
    }
    else {
        document.querySelector('#movingInterface').style.display ='none'
    }

    

    
    Raum1Background.draw()

    

    Raum1Zonen.forEach((ZoneRaum) => {
        ZoneRaum.draw()
    })
  
    Rätsel1Zonen.forEach((ZoneRaum) => {
        ZoneRaum.draw()
    })

    Tür1Zonen.forEach((ZoneRaum) => {
        ZoneRaum.draw()
    })
    
    
    player.draw()

    Raum1Vordergrund.draw()
    
    let moving = true

    

    
    player.moving = false

    
     

    if (riddle.initiated) return

    // Rätsel wird aktiviert
    if(keys.w.pressed || movingtouchUp) {
        for (let i = 0; i < Rätsel1Zonen.length; i++) {
            const Rätsel1Zone = Rätsel1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: Rätsel1Zone,
                    
                }) 
               
                
            ) {
                // deactivate current animation loop
                window.cancelAnimationFrame(animationRaum1Id)
                riddle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    repeat: 3,
                    yoyo: true,
                    duration: 0.4,
                    onComplete () {
                        gsap.to('#overlappingDiv',{
                            opacity: 1,
                            duration: 0.4,
                            onComplete() {
                                // activate  a new animation loop
                                initRiddle()
                                animateRiddle()
                                startTimer()
                                gsap.to('#overlappingDiv',{
                                    opacity: 0,
                                    duration: 0.4,
                                  
                                })

                            }
                        })

                       

                        
                    }
                })

                break
                
            }
        }
    }

    else if(keys.d.pressed || movingtouchUp) {
        for (let i = 0; i < Tür1Zonen.length; i++) {
            const Tür1Zone = Tür1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: Tür1Zone,
                    
                }) 
               
                
            ) {
                // deactivate current animation loop
                window.cancelAnimationFrame(animationRaum1Id)
                riddle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    repeat: 3,
                    yoyo: true,
                    duration: 0.4,
                    onComplete () {
                        gsap.to('#overlappingDiv',{
                            opacity: 1,
                            duration: 0.4,
                            onComplete() {
                                // activate  a new animation loop

                                animateFlurVerschiebung()
                                gsap.to('#overlappingDiv',{
                                    opacity: 0,
                                    duration: 0.4,
                                  
                                })

                            }
                        })

                       

                        
                    }
                })

                break
                
            }
        }
    }

    
   

    if (keys.w.pressed || movingtouchUp) {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < Raum1Zonen.length; i++) {
            const Raum1Zone = Raum1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Raum1Zone, position: {
                        x: Raum1Zone.position.x,
                        y: Raum1Zone.position.y + 3
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
        for (let i = 0; i < Raum1Zonen.length; i++) {
            const Raum1Zone = Raum1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Raum1Zone, position: {
                        x: Raum1Zone.position.x + 3,
                        y: Raum1Zone.position.y
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
        for (let i = 0; i < Raum1Zonen.length; i++) {
            const Raum1Zone = Raum1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Raum1Zone, position: {
                        x: Raum1Zone.position.x,
                        y: Raum1Zone.position.y - 3
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
        for (let i = 0; i < Raum1Zonen.length; i++) {
            const Raum1Zone = Raum1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Raum1Zone, position: {
                        x: Raum1Zone.position.x - 3,
                        y: Raum1Zone.position.y
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


//animateRaum1()