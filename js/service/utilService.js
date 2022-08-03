'use strict'

function getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}


function _makeId(length = 6) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}


function getAsCSV() {
    let csvStr = `Id, Name, Price, Category, Created At`
    gToys.forEach(toy => {
        if (!toy.isSelected) return
        const date = new Date(toy.createdAt).toDateString()
        const csvLine = `\n${toy.id}, ${toy.name}, \$${toy.price}, ${toy.category}, ${date}`
        csvStr += csvLine
    })
    return csvStr
}

function getFormatDate(time) {
    const date = new Date(time)
    return date.toDateString()
}