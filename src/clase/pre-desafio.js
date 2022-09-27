import {data} from "./data";

let is_ok = true;

let desafio = (time, task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task)
            }, 2000);
        } else {
            reject("Error")
        }
    });
}

desafio (data)
    then(result = console.log(result))
    .catch(err = console.log(err))
