
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista ";
//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent


    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso / (altura ** 2)

    tdImc.textContent = imc.toFixed(1);
}
