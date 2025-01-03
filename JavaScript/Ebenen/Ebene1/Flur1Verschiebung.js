
const FlurBackgroundImageVerschiebung = new Image();
FlurBackgroundImageVerschiebung.src = './img/Flure/Flur300/Flur1.png'

const FlurBackgroundVerschiebung = new Sprite ({
    position: {
    x: -2300,
    y: -1900
    
    },
    image: FlurBackgroundImageVerschiebung

})

const FlurVordergrundImageVerschiebung = new Image();
FlurVordergrundImageVerschiebung.src = './img/Flure/Flur300/Flur1Vordergrund.png'



const FlurVordergrundVerschiebung = new Sprite ({
    position: {
    x: -2300,
    y: -1900
    
    },
    image: FlurVordergrundImageVerschiebung

})




function animateFlurVerschiebung(){
    
    document.querySelector('#Titel').style.display ='none'


    document.querySelector('#Interface').style.display ='none'

    document.querySelector('#Geräte').style.display = 'none'

    document.querySelector('#IDtimer').style.display ='none'


    FlurAnimationId = window.requestAnimationFrame(animateFlurVerschiebung)

    FlurBackgroundVerschiebung.draw()

    player.draw()

    FlurVordergrundVerschiebung.draw()

    Flur1ZonenVerschiebung.forEach((ZoneFlur) => {
        ZoneFlur.draw()
    })

    Treppe1Zonen.forEach((ZoneFlur) => {
        ZoneFlur.draw()
    })


    player.moving = false

    moving = true


    if((keys.d.pressed || movingtouchUp ) && Rätsel1) {
        for (let i = 0; i < Treppe1Zonen.length; i++) {
            const Treppe1Zone = Treppe1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: Treppe1Zone,
                    
                }) 
               
                
            ) {
                // deactivate current animation loop
                window.cancelAnimationFrame(FlurAnimationId)
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
                                animateAula()
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

    else if (keys.d.pressed || movingtouchUp ) {
        player.moving = true

        for (let i = 0; i < Treppe1Zonen.length; i++) {
            const Treppe1Zone = Treppe1Zonen [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Treppe1Zone, position: {
                        x: Treppe1Zone.position.x - 3,
                        y: Treppe1Zone.position.y
                    }}
                })
            ) {
                
                moving = false
                break
            }
        }

    }

    

    
    if (keys.w.pressed || movingtouchUp) {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < Flur1ZonenVerschiebung.length; i++) {
            const Flur1ZoneVerschiebung = Flur1ZonenVerschiebung [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1ZoneVerschiebung, position: {
                        x: Flur1ZoneVerschiebung.position.x,
                        y: Flur1ZoneVerschiebung.position.y + 3
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
        for (let i = 0; i < Flur1ZonenVerschiebung.length; i++) {
            const Flur1ZoneVerschiebung = Flur1ZonenVerschiebung [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1ZoneVerschiebung, position: {
                        x: Flur1ZoneVerschiebung.position.x + 3,
                        y: Flur1ZoneVerschiebung.position.y
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
        for (let i = 0; i < Flur1ZonenVerschiebung.length; i++) {
            const Flur1ZoneVerschiebung = Flur1ZonenVerschiebung [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1ZoneVerschiebung, position: {
                        x: Flur1ZoneVerschiebung.position.x,
                        y: Flur1ZoneVerschiebung.position.y - 3
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
        for (let i = 0; i < Flur1ZonenVerschiebung.length; i++) {
            const Flur1ZoneVerschiebung = Flur1ZonenVerschiebung [i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...Flur1ZoneVerschiebung, position: {
                        x: Flur1ZoneVerschiebung.position.x - 3,
                        y: Flur1ZoneVerschiebung.position.y
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