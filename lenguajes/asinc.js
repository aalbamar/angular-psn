pintar = function (x) {
    console.log(`Me ha llegado ${x}`)
}

function asinc (callback) {
    let x = 'Saludo'
    setTimeout(() => {
        callback(x)
    }, 3000)
    // setTimeout(function () {
    //     callback(x)
    // }, 3000)
}

asinc(pintar)