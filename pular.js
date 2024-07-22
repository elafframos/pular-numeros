function contar() {
    let começo = document.getElementById('inicio')
    let final = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')

    if(começo.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Digite algo')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(começo.value)
        let f = Number(final.value)
        let p = Number(passos.value)

        if(p <= 0) {
            alert('Passo invalido! Considerando o passo 1')
            p = 1
        }
        if(i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
    começo.value = ''
    começo.focus()
}
