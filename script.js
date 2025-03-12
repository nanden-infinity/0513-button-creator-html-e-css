const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');


let handleStyles = {
  element: btn,
  color(valor){
    this.element.style.color = valor
  },
  backgroundColor(valor){
    this.element.style.backgroundColor = valor
  },
  fontSize(valor){
    this.element.style.fontSize = `${valor + "rem"}`
  },
  texto(valor){
    this.element.innerText = valor
  },
  fontFamily(valor){
    this.element.style.fontFamily = valor
  },
  height(valor){
    this.element.style.height = `${valor + "px"}`
    
  },
  width(valor){
    this.element.style.width = `${valor + "px"}`
  },
  border(valor){
    this.element.style.border = valor
  },
  borderRadius(valor){
    this.element.style.borderRadius = `${valor + "px"}`
  }
}
btn.addEventListener('click', handleClick);

function handleClick(){
showCss()

}


function handleChange(event){
  // styles[event.target.name] = event.target.value;
  // btn.style.text = styles.texto
  // btn.textContent = styles.texto
  // btn.style.background = styles.backgroundColor
  // btn.style.color = styles.color
  // btn.style.border = styles.border
  // btn.style.borderRadius = `${styles.borderRadius}'px'` 
  // btn.style.fontSize =  `${styles.fontSize}'px'` 
  // btn.style.fontFamily = styles.fontFamily
  // btn.style.width = `${styles.width}'px'`
  // btn.style.height = `${styles.height}'px'`
  
  const name = event.target.name
  const value = event.target.value
  saveValues(name,value)
handleStyles[name](value)
handleClick()
}
controles.addEventListener('change', handleChange)

'<span>'
function showCss(){
const stylos =   cssText.innerHTML = '<span>' + btn.style.cssText.split(';').join(';</span><span>').trim()

}


function saveValues(name, value){
localStorage[name] = value
}
setValue()
function setValue(){
  const properties = Object.keys(localStorage)
      properties.forEach((propertie) => {
        handleStyles[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie]
      });
      showCss()
     
}
