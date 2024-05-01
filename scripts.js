const botao = document.getElementById('botao');//pego o elemento todo
//console.log(botao);
botao.addEventListener('click',function(event){
    let nome = document.getElementById('nome').value;//pego só o valor
    if(nome != ''){
        //cancela o comportamento padrão do submit (que é validar o form, enviar os dados ao servidor e recarregar a página)
        event.preventDefault();
        document.getElementById('mensagem').innerHTML = nome;
    }
});