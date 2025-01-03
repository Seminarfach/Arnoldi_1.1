
let Hinweis1 = false

let Hinweis2 = false 

let Hinweis3 = false 

let Rätsel1 = false



document.getElementById('Antwort1').addEventListener('click', e => {
    
    document.querySelector('#Content').style.display = 'none'

            
    document.querySelector('#DialogText').innerHTML = 'Falsch, bitte versuche es nochmal!'

    stopTimer()

    
})

document.getElementById('Antwort2').addEventListener('click', e => {

    document.querySelector('#Content').style.display = 'none'
            
    document.querySelector('#DialogText').innerHTML = 'Richtig, ein neuer Raum wartet auf dich!'

    Rätsel1 = true

    stopTimer()
    
    
})

document.getElementById('Antwort3').addEventListener('click', e => {
    
    document.querySelector('#Content').style.display = 'none'
            
    document.querySelector('#DialogText').innerHTML = 'Falsch, bitte versuche es nochmal!'
          
    stopTimer()
    
})

document.getElementById('Antwort4').addEventListener('click', e => {

    document.querySelector('#Content').style.display = 'none'
            

    document.querySelector('#DialogText').innerHTML = 'Falsch, bitte versuche es nochmal!'
    stopTimer()
    
   
})

document.getElementById('Fortfahren').addEventListener('click', e => {

    Transition()

    document.querySelector('#Content').style.display = 'block'

    
   
})

document.getElementById('Hinweis1').addEventListener('click', e => {

    Hinweis1 = true
    Hinweis2 = false 
    Hinweis3 = false 

})

document.getElementById('Hinweis2').addEventListener('click', e => {

    Hinweis1 = false
    Hinweis3 = false 
    Hinweis2 = true

    
})



document.getElementById('Hinweis3').addEventListener('click', e => {

    Hinweis3 = true
    Hinweis1 = false 
    Hinweis2 = false

    
})

document.getElementById('Zurück').addEventListener('click', e => {

    Transition()
    
    Answers.initiated = false

    resetTimer()
    
    document.querySelector('#Content').style.display = 'block'

    
})



