var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent


    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    // if ( peso <= 0 || peso >= 600 ) {
        
    //     pesoEhValido = false;
    //     tdImc.textContent = "Peso Invalido!";
    //    // paciente.style.backgroundColor = "lightcoral";
    //     paciente.classList.add("paciente-invalido");
        
    // }
    
    // if ( altura <= 0 || altura >= 3.00 ) {
        
    //     alturaEhValido = false;
    //     tdAltura.textContent = "Altura Invalida ";
    //     paciente.classList.add("paciente-invalido");
    // }
    
    if(alturaEhValido && pesoEhValido){
        var imc = calculaImc(peso, altura)

        tdImc.textContent = imc;
    }
    
    
}
function calculaImc(peso, altura ) {
    var imc = 0;
    imc = peso/ (altura**2);
    return imc.toFixed(2);
}
function validaPeso(peso){

    if ( peso >= 0 && peso <= 600 ) {
        return true;
       
        
    }else{
        paciente.classList.add("paciente-invalido");
        return false;
    }
}
function validaAltura(altura){
    if ( altura >= 0 && altura <= 3.00 ) {
        return true
       
    }else{
        paciente.classList.add("paciente-invalido");
        return false;
    }

}