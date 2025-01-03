const SchulhofImage = new Image()
SchulhofImage.src = './img/Schulhof/Schulhof.png'


const Schulhof = new Sprite ({
    position: {
    x: offset.x + 200,
    y: offset.y - 400,
    
    },
    image: SchulhofImage

})


function animateSchulhof(){

    document.querySelector('#IDtimer').style.display = 'none'

    document.querySelector('#Titel').style.display ='none'

    document.querySelector('#Interface').style.display ='none'

    document.querySelector('#Geräte').style.display = 'none'

    
    SchulhofAnimationId = window.requestAnimationFrame(animateSchulhof)

    Schulhof.draw()

    player.draw()

    EingangZonen.forEach((ZoneSchulhof) => {
        ZoneSchulhof.draw()
    })

    SchulhofZonen.forEach((ZoneSchulhof) => {
        ZoneSchulhof.draw()
    })

    player.moving = false

    moving = true

    if (Handy){
        document.querySelector('#movingInterface').style.display ='block'
    }
    else {
        document.querySelector('#movingInterface').style.display ='none'
    }

    // Rätsel wird aktiviert
    
    if(keys.w.pressed || movingtouchUp) {
        for (let i = 0; i < EingangZonen.length; i++) {
            const EingangZone = EingangZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: EingangZone,
                    
                }) 
               
                
            ) {
                console.log('Kollision')
                // deactivate current animation loop
                window.cancelAnimationFrame(SchulhofAnimationId)
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
                                animateFlur()
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
        for (let i = 0; i < SchulhofZonen.length; i++) {
            const ZoneSchulhof = SchulhofZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...ZoneSchulhof, position: {
                        x: ZoneSchulhof.position.x,
                        y: ZoneSchulhof.position.y + 3
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
        for (let i = 0; i < SchulhofZonen.length; i++) {
            const ZoneSchulhof = SchulhofZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...ZoneSchulhof, position: {
                        x: ZoneSchulhof.position.x + 3,
                        y: ZoneSchulhof.position.y
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
        for (let i = 0; i < SchulhofZonen.length; i++) {
            const ZoneSchulhof = SchulhofZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...ZoneSchulhof, position: {
                        x: ZoneSchulhof.position.x,
                        y: ZoneSchulhof.position.y - 3
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
        for (let i = 0; i < SchulhofZonen.length; i++) {
            const ZoneSchulhof = SchulhofZonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...ZoneSchulhof, position: {
                        x: ZoneSchulhof.position.x - 3,
                        y: ZoneSchulhof.position.y
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

//animateSchulhof()