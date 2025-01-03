

const FlurBackgroundImage = new Image();
FlurBackgroundImage.src = './img/Flure/Flur300/Flur1.png'


const FlurBackground = new Sprite ({
    position: {
    x: -2800,
    y: -1520
    
    },
    image: FlurBackgroundImage

})


const FlurVordergrundImage = new Image();
FlurVordergrundImage.src = './img/Flure/Flur300/Flur1Vordergrund.png'


const FlurVordergrund = new Sprite ({
    position: {
    x: -2800,
    y: -1520
    
    },
    image: FlurVordergrundImage

})






function animateFlur(){
    
    document.querySelector('#Titel').style.display ='none'

    document.querySelector('#Interface').style.display ='none'

    document.querySelector('#Geräte').style.display = 'none'

    document.querySelector('#IDtimer').style.display ='none'


    FlurAnimationId = window.requestAnimationFrame(animateFlur)

    
    FlurBackground.draw()

    player.draw()

    FlurVordergrund.draw()

    Flur1Zonen.forEach((ZoneFlur) => {
        ZoneFlur.draw()
    })
    

    EingangRaum1Zonen.forEach((ZoneFlur) => {
        ZoneFlur.draw()
    })


    


    player.moving = false

    moving = true

    if(keys.w.pressed || movingtouchUp) {
        for (let i = 0; i < EingangRaum1Zonen.length; i++) {
            const EingangRaum1Zone = EingangRaum1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: EingangRaum1Zone,
                    
                }) 
               
                
            ) {
                console.log('Kollision')
                // deactivate current animation loop
                window.cancelAnimationFrame(FlurAnimationId)
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
                                animateRaum1()
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
        for (let i = 0; i < Flur1Zonen.length; i++) {
            const Flur1Zone = Flur1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1Zone, position: {
                        x: Flur1Zone.position.x,
                        y: Flur1Zone.position.y + 3
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
        for (let i = 0; i < Flur1Zonen.length; i++) {
            const Flur1Zone = Flur1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1Zone, position: {
                        x: Flur1Zone.position.x + 3,
                        y: Flur1Zone.position.y
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
        for (let i = 0; i < Flur1Zonen.length; i++) {
            const Flur1Zone = Flur1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1Zone, position: {
                        x: Flur1Zone.position.x,
                        y: Flur1Zone.position.y - 3
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
        for (let i = 0; i < Flur1Zonen.length; i++) {
            const Flur1Zone = Flur1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1Zone, position: {
                        x: Flur1Zone.position.x - 3,
                        y: Flur1Zone.position.y
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

//animateFlur()

