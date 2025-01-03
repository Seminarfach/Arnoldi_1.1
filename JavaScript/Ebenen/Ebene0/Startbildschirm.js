const startImage = new Image()
startImage.src = './img/Startbildschirm/Startbildschirm.png'

const start = new Sprite ({
    position: {
    x: 0,
    y: 0,
    
    },
    image: startImage

})

function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(startImage,0,0,canvas.width, canvas.height)
}

let Handy = false





function animateStartbildschirm(){
    
    document.querySelector('#IDtimer').style.display = 'none'

    document.querySelector('#movingInterface').style.display ='none'

    document.querySelector('#Interface').style.display ='none'

    StartbildschirmAnimationId = window.requestAnimationFrame(animateStartbildschirm)
    
    drawBackground()

    

    
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {


        if(e.currentTarget.innerHTML === "Handy") {

            Handy = true 
            
            cancelAnimationFrame(StartbildschirmAnimationId)

            gsap.to('#overlappingDiv',{
                opacity: 1,
                onComplete: () => {
                    cancelAnimationFrame(riddleAnimationId)
                    animateSchulhof()
                    document.querySelector('#Interface').style.display = 'none'
                    gsap.to ('#overlappingDiv', {
                        opacity: 0                
                    })
                    riddle.initiated = false
                }
            })


        }

        else if(e.currentTarget.innerHTML === 'PC') {

            cancelAnimationFrame(StartbildschirmAnimationId)

            gsap.to('#overlappingDiv',{
                opacity: 1,
                onComplete: () => {
                    cancelAnimationFrame(riddleAnimationId)
                    animateSchulhof()
                    document.querySelector('#Interface').style.display = 'none'
                    gsap.to ('#overlappingDiv', {
                        opacity: 0                
                    })
                    riddle.initiated = false
                }
            })
        }
    })
})


const landscape =  window.matchMedia("(orientation: landscape)") .matches



if(landscape){
    animateStartbildschirm()
}


let orn = getOrientation()

function getOrientation (){
    let _orn = screen.msOrientation || (screen.orientation || screen.mozOrientation).type
    
    switch (_orn) {
        case 'portrait-primary':
            break;
        case 'portrai-secondary':
            break;
        case 'landscape-primary':
            console.log('Laptop')
            animateStartbildschirm()
            break;
        case 'landscape-sceondary':
            break
    }
}

window.matchMedia("(orientation:landscape)").addEventListener("change", e => {
    const landscape = e.matches

    if(landscape) {

        animateStartbildschirm()
        

    }

 

})




