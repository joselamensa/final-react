let is_ok = true;

let dinero = 1000;

let calcularDinero = (dinero) => {
    return dinero*1.10;
}

let prestamo = (time, task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    });
}

prestamo(2000, calcularDinero(dinero))
    .then(datos => {console.log(datos)})
    .catch(err => console.log(err))