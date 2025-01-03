
const riddleBackgroundImage = new Image()
riddleBackgroundImage.src = './img/Rätsel/Tafel_groß.png'

const Interface = document.getElementById("Interface")

const InterfaceWidth = Interface.offsetWidth

const InterfaceHeight = Interface.offsetHeight

function drawriddleBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const BackgroundWidth = canvas.width 
    const BackgroundHeight = canvas.height
    const fixedX = canvas.width * 0.5 - BackgroundWidth / 2 
    const fixedY = canvas.height * -0.08
    ctx.drawImage(riddleBackgroundImage,fixedX,fixedY,BackgroundWidth, BackgroundHeight)
}


const SudokuImage = new Image()
SudokuImage.src = './img/Rätsel/Sudoku.png'


console.log(canvas.width)

console.log(SudokuImage.width)
function drawSudoku() {
    const SudokuWidth = canvas.width * 0.4
    const SudokuHeight = SudokuWidth *(SudokuImage.height / SudokuImage.width)
    const fixedX = canvas.width * 0.513 - SudokuWidth / 2
    const fixedY = canvas.height * 0.3 - SudokuHeight / 2
    ctx.drawImage(SudokuImage, fixedX, fixedY, SudokuWidth, SudokuHeight)
}

const SudokuHinweis1Image = new Image()
SudokuHinweis1Image.src = './img/Rätsel/Hinweis1.png'

function drawSudokuHinweis1() {
    const SudokuHinweis1Width = canvas.width * 0.4
    const SudokuHinweis1Height = SudokuHinweis1Width *(SudokuHinweis1Image.height / SudokuHinweis1Image.width)
    const fixedX = canvas.width * 0.513 - SudokuHinweis1Width / 2 
    const fixedY =cancanvas.height * (-0.07)
 
    ctx.drawImage(SudokuHinweis1Image, fixedX, fixedY, SudokuHinweis1Width, SudokuHinweis1Height)
}



const SudokuHinweis2Image = new Image()
SudokuHinweis2Image.src = './img/Rätsel/Hinweis2.png'

function drawSudokuHinweis2() {
    const SudokuHinweis2Width = canvas.width * 0.4
    const SudokuHinweis2Height = SudokuHinweis2Width *(SudokuHinweis2Image.height / SudokuHinweis2Image.width)
    const fixedX = canvas.width * 0.513 - SudokuHinweis2Width / 2 
    const fixedY = canvas.height * (-0.07)
 
    ctx.drawImage(SudokuHinweis1Image, fixedX, fixedY, SudokuHinweis2Width, SudokuHinweis2Height)
}



const SudokuHinweis3Image = new Image()
SudokuHinweis3Image.src = './img/Rätsel/Hinweis3.png'

function drawSudokuHinweis3() {
    const SudokuHinweis3Width = canvas.width * 0.4
    const SudokuHinweis3Height = SudokuHinweis3Width *(SudokuHinweis3Image.height / SudokuHinweis3Image.width)
    const fixedX = canvas.width * 0.513 - SudokuHinweis3Width / 2 
    const fixedY = canvas.height * (-0.07)
 
    ctx.drawImage(SudokuHinweis3Image, fixedX, fixedY, SudokuHinweis3Width, SudokuHinweis3Height)
}









let riddleAnimationId

const Answers = {
    initiated: false
}


function Transition () {
    gsap.to('#overlappingDiv',{
        opacity: 1,
        onComplete: () => {
            cancelAnimationFrame(riddleAnimationId)
            animateRaum1()
            document.querySelector('#Interface').style.display = 'none'
            gsap.to ('#overlappingDiv', {
                opacity: 0                
            })
            riddle.initiated = false
        }
    })
}






function animateRiddle(){

    document.querySelector('#Titel').style.display ='none'

    document.querySelector('#IDtimer').style.display = 'flex'

    document.querySelector('#AuswahlID').style.display = 'none'

    document.querySelector('#movingInterface').style.display ='none'

    document.querySelector('#Interface').style.display ='block'

    document.querySelector('#Interface').style.width = `${canvas.width}px`

    document.querySelector('#Interface').style.height = `${canvas.height * 0.3}px`
    
    riddleAnimationId = window.requestAnimationFrame(animateRiddle)

    
    
    drawriddleBackground()

    drawSudoku()
    
    if(Hinweis1){
        drawSudokuHinweis1()
    }

    else if(Hinweis2){
        drawSudokuHinweis2()
    }

    else if(Hinweis3){
        drawSudokuHinweis3()
    }
    


    if(insgesamteZeit === 20){

        document.querySelector('#Hinweis1').disabled = false

        document.querySelector('#Hinweis1').style.cursor ='pointer'
        
    }    

    else if(insgesamteZeit === 30){

        document.querySelector('#Hinweis2').disabled = false

        document.querySelector('#Hinweis2').style.cursor ='pointer'
        
    }    

    else if(insgesamteZeit === 40){
         
        document.querySelector('#Hinweis3').disabled = false

        document.querySelector('#Hinweis3').style.cursor ='pointer'
        

    }    

    
    

}

//animateRiddle()


