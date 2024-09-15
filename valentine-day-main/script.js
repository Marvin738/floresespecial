const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"No se en que momento lo abriste pero espero ser el primero en felicitarte.", images:"images/cat-02.gif"},
  {text:"Espero que durmieras bien, que te gustara la flor y tambien esta dinamica.", images:"images/cat-03.gif"},
  {text:"solo espero que el dia de hoy te la pases de lo mejor y que te alegre el dia este pequeño detalle.", images:"images/cat-04.gif"},
  {text:"te quiero preciosa, me gustas mucho y bueno se que ya te lo he dicho pero quiero que sepas que no voy a dejar de recordartelo.", images:"images/cat-yes.gif"},
]
const ohyes = {text:"Sabía que aceptarias", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Si"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Siguiente'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})