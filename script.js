var body = document.querySelector('.body')
var row = document.querySelector('.row')
var colors = []
var startBtn = document.querySelector('.startBtn')
var lights = document.querySelectorAll('.lamp')
var chooseColor = document.querySelectorAll('.color')
var colorLamp
var change
var count = 0

startBtn.addEventListener('click', startLights, false)

chooseColor.forEach(color => {
    color.addEventListener('click', () => {
        color.style.border = '3px solid #222'
        var colorClicked = color.getAttribute('id')
        colors.push(colorClicked)
        console.log(colors)
    })
})


function startLights() {
    count += 1
    changeStyle()
    
    colorLamp = Math.floor(Math.random() * colors.length )
    

    if(count % 2 == 1){
        change = setInterval(changeLight, 500)
    }

}

function changeLight() {
    for (var i = 0; i < lights.length; i++) {
        lights[i].style.background = colors[colorLamp]
        lights[i].style.boxShadow = `0px 0px 60px 25px ${colors[colorLamp]}`
        lights[i].style.border = '1px solid #555'
        colorLamp = Math.floor(Math.random() * colors.length)
        console.log(colorLamp)
    }
}

function changeStyle() {

    body.classList.toggle('bodyStop')
    startBtn.classList.toggle('startBtnStop')
    row.classList.toggle('rowStop')

    if (count % 2 == 0) {
        for (var i = 0; i < lights.length; i++) {
            clearInterval(change)
            lights[i].style.background = 'white'
            lights[i].style.boxShadow = '0px 0px 0px 0px white'
            lights[i].style.border = '2px solid #333'
        }

        chooseColor.forEach(color => { 
            color.style.border = '1px solid #222' 
            colors.pop()      
        })

        console.log(colors)
    }
    
}
