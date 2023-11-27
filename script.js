let value = document.querySelector('h1')
let start_local = document.querySelector('#local')
let start_Worker = document.querySelector('#worker')

function kolya_edet() {
    let k = 0

    while(k < 200000){
        value.innerHTML = k
        k++
    }
}



let worker

function startWorker(){
    if(Worker){
        worker = new Worker('./worker.js')
    }

    worker.onmessage = function (event){
        value.innerHTML = event.data
    }
}

start_local.addEventListener('click', kolya_edet)
start_Worker.addEventListener('click', startWorker)
