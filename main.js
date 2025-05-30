
function iniciarContagem(dataInicial){
function atualizarContagem(){

    
    let data = new Date()

    let diferencaMs = data - dataInicial
    const segundosTotais = Math.floor(diferencaMs / 1000)
    let meses = Math.floor(segundosTotais / 2592000).toString().padStart(2,'0')
    let dias = Math.floor((segundosTotais % 2592000) / 86400).toString().padStart(2,'0')
    let horas = Math.floor((segundosTotais % 86400) / 3600 ).toString().padStart(2,'0')
    let minutos =  Math.floor((segundosTotais % 3600) / 60).toString().padStart(2,'0')
    let segundos = (segundosTotais % 60).toString().padStart(2,'0')
    
    document.getElementById("relogioId").textContent = (`${meses} Meses: ${dias} Dias: ${horas} Horas:  ${minutos} Minutos:  ${segundos} Segundos `);

}

setInterval(atualizarContagem, 1000)

atualizarContagem()
}

const dataInicial = new Date(2025, 4, 3, 19, 3, 0)
iniciarContagem(dataInicial)