function kolya_letit(){
    let k = 0

    while(k < 2000000){
        postMessage(`Воркер передает: ${k}`)
        k++
}
}
kolya_letit()

