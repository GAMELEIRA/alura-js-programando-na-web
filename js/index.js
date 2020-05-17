const buscarBotao = () => window.document.querySelector("#adicionar-paciente");

const botao = buscarBotao();

console.log(botao);

botao.addEventListener("click", (evento) => {

    evento.preventDefault();

})

const mudarTitulo = (() => {

    var titulo = window.document.querySelector("#titulo"); //BUSCA O ELEMENTO NO DOM

    titulo.textContent = "Gabriel Gameleira"; //ALTERA O VALOR DA TAG

})();

const calcularImcIndex = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

const validarPesoAltura = (peso, altura) => {

    if (peso < 0 || peso > 100) {

        console.log("Peso inválido");

        return false;

    } else if (altura < 0 || altura > 3.00) {

        console.log("Altura inválida");

        return false;

    }

    return true;

}

// const pacientes = window.document.querySelector(".paciente"); BUSCA UM

const buscarPacientes = () => window.document.querySelectorAll(".paciente"); // BUSCA TODOS

const calcularImcPacientes = ((buscarPacientes) => {

    const pacientes = buscarPacientes();

    pacientes.forEach((paciente) => {

        const peso = paciente.querySelector(".info-peso").textContent;

        const altura = paciente.querySelector(".info-altura").textContent;

        let calcula_imc_ou_nao = validarPesoAltura(peso, altura);

        console.log(calcula_imc_ou_nao);

        if (calcula_imc_ou_nao) {

            imc = paciente.querySelector(".info-imc").innerHTML = calcularImcIndex(peso, altura);

        } else {

            imc = paciente.querySelector(".info-imc").textContent = "Peso ou Altura inválidos";

            // paciente.style.backgroundColor = "red"; // MODIFICA O ESTILO DO FUNDO

            paciente.classList.add("paciente_invalido"); //CRIA UMA CLASSE CSS

        }
    });

})(buscarPacientes);