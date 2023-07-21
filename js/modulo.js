/*Variáveis no escopo global
var botao = document.getElementById('enviar');
var nome = document.getElementById('nome');
var endereco = document.getElementById('endereco');

const validarElementos = function(){
if(nome.value == '' || endereco.value == '')
alert('Campos obrigatórios precisam ser preenchidos.')
if(nome.value == '') 
nome.style.background = '#f5cbcb';
        

}
const bloqueioNumeros = function(tecla){
   let code = tecla.keyCode;
   if (code > 32 && code < 64 )
    event.preventDefault();
}

botao.addEventListener('click', function(){validarElementos(); });
nome.addEventListener('keypress', function () {bloqueioNumeros(event); });*/

$(document).ready(function(){
   var nome = $('#nome');
   var endereco = $('#endereco');

   $('#enviar').on('click', function(){
        if(nome.val() == '' || endereco.val() == ''){
            alert('Campos obrigatórios precisam ser preenchidos.');
            if(nome.val() == '')
                nome.css('background-color' , '#f5cbcb');
        else if(endereco.val() == '')
            endereco.css('background-color' , '#f5cbcb');

        }else{
            nome.css('background-color' , '#ffffff');
            endereco.css('background-color' , '#ffffff');
        }
   })
})


























