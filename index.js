let scoreH = document.getElementById("HP")
let addH = 0
let scoreG = document.getElementById("GP")
let addG = 0

function a1h(){
    addH += 1
    scoreH.innerText = addH
}

function a2h(){
    addH += 2
    scoreH.innerText = addH
}

function a3h(){
    addH += 3
    scoreH.innerText = addH
}

function a1g(){
    addG += 1
    scoreG.innerText = addG
}

function a2g(){
    addG += 2
    scoreG.innerText = addG
}

function a3g(){
    addG += 3
    scoreG.innerText = addG
}

function reset(){
        addG = 0,
        addH = 0
    scoreH.innerText = addH
    scoreG.innerText = addG
}