const ask = document.getElementById("ask")
const no_no = document.getElementById("no_no")
const si_si = document.getElementById("si_si")
const modalMessege = document.getElementById("modalMessege")
const btn_close = document.getElementById("btn-close")

// CON ESTO PODEMOS RECIEN ACCEDER A LAS COORDENADAS
let coorAsk = ask.getBoundingClientRect()
let cor = si_si.getBoundingClientRect()
let coor = no_no.getBoundingClientRect()

si_si.style.top = coorAsk.top + coorAsk.height + 50 + "px"
si_si.style.left = coorAsk.left + 60 + "px"

// ASIGNAMOS COORDENADAS PRIMARIAS DE ACUERDO A LA POSICION DEL BOTON "SI"
no_no.style.top = cor.top + 50 + "px"
no_no.style.left = cor.left + coorAsk.width - cor.width - coor.width + "px"

// EVENTO QUE DETECTA EL HOVER Y CAMBIA LA POSICION DEL BOTON
no_no.addEventListener("mouseover", (e)=>{
    let numRandomX = Math.floor(Math.random() * (document.documentElement.scrollWidth - 200))
    let numRandomY = Math.floor(Math.random() * (document.documentElement.scrollHeight - 200))

    no_no.style.left = numRandomX + "px"
    no_no.style.top = numRandomY + "px"
})

// EFECTO HOVER EN EL BOTON CON EL MODAL
si_si.addEventListener("mouseover", () => {
    si_si.innerText = "SI!! UwU"
})
si_si.addEventListener("mouseout", () => {
    si_si.innerText = "NO!! >:v"
})

let result
si_si.addEventListener("click", ()=>{
    result = modalMessege.classList.toggle("active")
})
btn_close.addEventListener("click", () => {
    if(result==true) modalMessege.className = "modal_si_si"
})