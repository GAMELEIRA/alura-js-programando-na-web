const todosPacientes = document.querySelectorAll("tr");

const tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {

    event.target.parentNode.remove();

})

// todosPacientes.forEach((paciente) => {

//     paciente.addEventListener("dblclick", () => {

//         console.log(paciente);

//         paciente.remove();

//     })

// });


console.log(todosPacientes);