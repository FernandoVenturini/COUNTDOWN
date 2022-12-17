const formatarDigito = (digito) => `0${digito}`.slice(-2); // 9- Função formatarDigito (mostra 2 digitos na div segundos) e o slice para mostrar os segundos em 2 digitos da direita para esquerda.

const atualizar = (tempo) => { // 7- Função vai atualizar o tempo.
    const segundos = document.getElementById('segundos'); // 8a- segundos
    const minutos = document.getElementById('minutos'); // 10a- minutos
    const horas = document.getElementById('horas'); // 11a- horas
    const dias = document.getElementById('dias'); // 12a- dias

    const qtdSegundos = tempo % 60; // 8c- Calculo dos segundos.
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60); // 10c- minutos.
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60)); // 11c- horas
    const qtdDias = Math.floor(tempo / (60 * 60 * 24)); // 12c- dias

    segundos.textContent = formatarDigito(qtdSegundos); // 8b- passando o segundos para mostrar na div e formatando os segundos para mostrar 2 digitos e passando qtdSegundos como parametro.
    minutos.textContent = formatarDigito(qtdMinutos); // 10b- minutos
    horas.textContent = formatarDigito(qtdHoras); // 11b- horas
    dias.textContent = formatarDigito(qtdDias); // 12b- dias
    
}

const contagemRegressiva = function (tempo) { // 1- Criando a função contagemRegressiva e passando parametro 'tempo'.
    const pararContagem = () => clearInterval(id); // 6- Parando a contagem do setInterval.

    const contar = () => { // 2- Contador do tempo.
        if (tempo === 0) { // 4- Verificação do tempo ate 0.
            pararContagem(); // 5- Para a contagem do tempo.
        }
        atualizar(tempo); // 7- Função atualizar tempo.
        tempo--; // 3- Faz a contagem regressiva do tempo.
    }
    const id = setInterval(contar, 1000); // 2- setInterval faz a contagem de segundos. 6- pararContagem.
}

const tempoRestante = function() { // 13- Função tempoRestante
    const dataEvento = new Date('2022-12-25 00:00:00'); // 14- data do evento + horas.
    const dataHoje = Date.now(); // 15- data de hoje.

    return Math.floor((dataEvento - dataHoje) / 1000); // 16- return
}

contagemRegressiva(tempoRestante()); // 1- Chamando a função contagemRegressiva();