
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)



const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = `assets/green-character/static.gif`
    }
    if(direction === 'west'){
        character.src = `assets/green-character/west.gif`
    }
    if(direction === 'north'){
        character.src = `assets/green-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `assets/green-character/east.gif`
    }
    if(direction === 'south'){
        character.src = `assets/green-character/south.gif`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)



move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)