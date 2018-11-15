function asinc () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = parseInt(Math.random() * 10)
            if( n < 8 ) {
                //todo bien
                resolve(n)
            } else {
                //error
                reject(n)
            }
        }, 2000);
    })
}

asinc().then(
    (response) => {console.log(`Acierto ${response}`)},
    (error) => {console.log(`Error ${error}`)}
)
//Lo siguiente es equivalente:
asinc().then(
    (response) => {console.log(`Acierto ${response}`)}
).catch((error) => {console.log(`Error ${error}`)})
