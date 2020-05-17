const buscarTabelaPaciente = () => document.querySelector("#tabela-pacientes");

const construirLinha = () => document.createElement("tr");

const construirCampo = () => document.createElement("td");

const calcularImc = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

const construirPaciente = () => {

    return {

        nome: null,

        peso: null,

        altura: null,

        gordura: null,

        imc: null

    }

}

const contruirCamposTabelaPaciente = () => {

    return {

        nomeTd: construirCampo(),

        pesoTd: construirCampo(),

        alturaTd: construirCampo(),

        gorduraTd: construirCampo(),

        imcTd: construirCampo()

    }

}

const construirLinhaTabelaPaciente = () => {

    return {

        pacienteTr: construirLinha()

    }

}

const associarClasseLinha = (linhaPaciente, classe) => {

    linhaPaciente.pacienteTr.classList.add(classe);

}


const associarClasseCampos = (camposPaciente) => {

    camposPaciente.nomeTd.classList.add("info-nome");

    camposPaciente.pesoTd.classList.add("info-peso");

    camposPaciente.alturaTd.classList.add("info-altura");

    camposPaciente.gorduraTd.classList.add("info-gordura");

    camposPaciente.imcTd.classList.add("info-imc");

}

const associarValoresDoFormComPaciente = (paciente) => {

    form = document.querySelector("#form-adiciona");

    paciente.nome = form.nome.value;

    paciente.peso = form.peso.value;

    paciente.altura = form.altura.value;

    paciente.gordura = form.gordura.value;

    paciente.imc = calcularImc(paciente.peso, paciente.altura);

}

const buscarBotaoAdicionarPaciente = () => document.querySelector("#adicionar-paciente");

const botaoAdicionarPaciente = buscarBotaoAdicionarPaciente();

const tirarEventoPadraoRecarregarDom = (evento) => evento.preventDefault();

const passarValoresPacienteParaCampos = (paciente, camposPaciente) => {

    camposPaciente.nomeTd.textContent = paciente.nome;

    camposPaciente.pesoTd.textContent = paciente.peso;

    camposPaciente.alturaTd.textContent = paciente.altura;

    camposPaciente.gorduraTd.textContent = paciente.gordura;

    camposPaciente.imcTd.textContent = paciente.imc;

}

const associarLinhaPacienteComCamposPaciente = (linhaPaciente, camposPaciente) => {

    linhaPaciente.pacienteTr.appendChild(camposPaciente.nomeTd);

    linhaPaciente.pacienteTr.appendChild(camposPaciente.pesoTd);

    linhaPaciente.pacienteTr.appendChild(camposPaciente.gorduraTd);

    linhaPaciente.pacienteTr.appendChild(camposPaciente.alturaTd);

    linhaPaciente.pacienteTr.appendChild(camposPaciente.imcTd);

}

const associarLinhaPacienteComTabelaPaciente = (linhaPaciente, tabelaPaciente) => tabelaPaciente.appendChild(linhaPaciente.pacienteTr);

const limparForm = () => {

    const form = document.querySelector("#form-adiciona");

    form.reset();

}

const addPacienteNaTabela = () => {

    const tabelaPaciente = buscarTabelaPaciente();

    const linhaPaciente = construirLinhaTabelaPaciente();

    const camposPaciente = contruirCamposTabelaPaciente();

    const paciente = construirPaciente();

    associarClasseCampos(camposPaciente);

    associarValoresDoFormComPaciente(paciente);

    passarValoresPacienteParaCampos(paciente, camposPaciente);

    associarLinhaPacienteComCamposPaciente(linhaPaciente, camposPaciente);

    associarLinhaPacienteComTabelaPaciente(linhaPaciente, tabelaPaciente);

    if (validarPesoAltura(paciente.peso, paciente.altura) == false) {

        paciente.imc.innerHTML = "Peso ou altura inválidos";

        associarClasseLinha(linhaPaciente, "paciente_invalido");

    } else {

        associarClasseLinha(linhaPaciente, "paciente");

    }

    limparForm();

}

botaoAdicionarPaciente.addEventListener("click", (evento) => {

    addPacienteNaTabela();

});