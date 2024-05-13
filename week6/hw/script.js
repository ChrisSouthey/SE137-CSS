var buttons = document.querySelectorAll(`nav button`)


for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener(`click`, butts)
}

function butts(e){
    for(let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove(`active`)
    }
    e.target.classList.add(`active`)
    document.querySelector(`#breadcrumbs`).innerHTML = `<a href="#">SE137</a>` + `<span>></span>` + `<a href="#">W6</a>` + `<span>></span>`+ `<a href="#">Homework</a>` + `<span>></span>` + `<a href="#">${e.target.innerHTML}</a>`
}


var dropDownButton = document.querySelector(`aside button`)

dropDownButton.addEventListener(`click`, e=>{
    document.querySelector(`.tray`).classList.toggle(`hide`)
})