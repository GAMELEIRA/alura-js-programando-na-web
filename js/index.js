    var titulo = window.document.querySelector("#titulo"); //BUSCA O ELEMENTO NO DOM

    const botao = window.document.querySelector("#adicionar-paciente");

    console.log(window === this);

    titulo.textContent = "Gabriel Gameleira"; //ALTERA O VALOR DA TAG

    const pacientes = window.document.querySelectorAll(".paciente"); // BUSCA TODOS

    // const pacientes = window.document.querySelector(".paciente"); BUSCA UM

    pacientes.forEach((paciente) => {

        const peso = paciente.querySelector(".info-peso").textContent;

        const altura = paciente.querySelector(".info-altura").textContent;

        let calcula_imc_ou_nao = true;

        if (peso < 0 || peso > 100) {

            console.log("Peso inválido");

            calcula_imc_ou_nao = false;

        } else if (altura < 0 || altura > 3.00) {

            console.log("Altura inválida");

            calcula_imc_ou_nao = false;

        }

        let imc;

        if (calcula_imc_ou_nao) {

            imc = paciente.querySelector(".info-imc").textContent = (peso / (Math.pow(altura, 2))).toFixed(2);

        } else {

            imc = paciente.querySelector(".info-imc").textContent = "Peso ou Altura inválidos";

            // paciente.style.backgroundColor = "red"; // MODIFICA O ESTILO DO FUNDO

            paciente.classList.add("paciente_invalido"); //CRIA UMA CLASSE CSS


        }
    });

    titulo.addEventListener("click", () => {

        console.log("Olá GAMELEIRA!");

    })

    botao.addEventListener("click", (evento) => {

        let tabela = document.querySelector("#tabela-pacientes");

        console.log(tabela);

        event.preventDefault(evento);

        const form = document.querySelector("#form-adiciona");

        const nome = form.nome.value;

        const peso = form.peso.value;

        const altura = form.altura.value;

        const gordura = form.gordura.value;

        const pacientTr = document.createElement("tr");

        const nomeTd = document.createElement("td");

        const pesoTd = document.createElement("td");

        const gorduraTd = document.createElement("td");

        const alturaTd = document.createElement("td");

        nomeTd.textContent = nome;

        pesoTd.textContent = peso;

        alturaTd.textContent = altura;

        gorduraTd.textContent = gordura;

        pacientTr.appendChild(nomeTd);

        pacientTr.appendChild(pesoTd);

        pacientTr.appendChild(gorduraTd);

        pacientTr.appendChild(alturaTd);

        tabela.appendChild(pacientTr);

    });