var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    // extraindo as informações dos paciente 
   var paciente = obtemPacienteDoFormulario(form);

   var erros = validaPaciente(paciente);
   
   if(erros.length > 0 ){
        exibeMensagensDeErro(erros);

        return;
   }

    //var imc = form.imc.value

    // cria tr rd do paciente
    

    adicionaPacientesNaTabela(paciente)

    form.reset();
    var mensagensDeErro= document.querySelector("mensagens-erro");
    ul.innerHTML = "";

    
});
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}
function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erro = [];

    if (paciente.nome.length == 0) {
        erro.push("O nome do paciente não pode ser vazio!");
        
    }
    if (paciente.peso.length == 0) {
        erro.push("O peso não pode ser vazio");
    }
    if (paciente.altura.length == 0) {
        erro.push("A altura não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erro.push("O peso é invalido");
    }
    if (!validaAltura(paciente.altura)){
        erro.push("A altura é invalida ");
        
    }
    return erro;
}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("mensagens-erro");
    ul.innerHTML="";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });

}
function adicionaPacientesNaTabela(paciente){
    var pacienteTr = montaTr(paciente);

   var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

}