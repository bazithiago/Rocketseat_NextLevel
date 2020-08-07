// document.querySelector("#container").style.backgroundColor = "red";

document.querySelector("#add-time") //pega o elemento com id "add time" (no caso é um botão)
.addEventListener('click', cloneField) //aplica um evento. nesse caso de click e executa a função cloneField

function cloneField() { // precisamos criar então a função
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // transforma em variável o clone, selecionando toda a div a ser clonada (schedule-item) e um true como parametro, para que copie tudo que tem dentro da div. false só cria a div, sem seu conteúdo.
    const fields = newFieldContainer.querySelectorAll('input') // ao ser clonado, vamos limpar os campos. cria variável para o campo, que será todos os inputs da div clonada (variável newFieldContainer), mas só selecionou, precisa limpar
    fields.forEach(function(field) { // para cada elemento do fields, execute a função de pgar os valores e aplicar vazio
        field.value = "";
    })
    document.querySelector('#schedule-items').appendChild(newFieldContainer) // feito tudo, pegue a div com id "schedule-items" e adicione (appendChild) o novo container (newFieldContainer) 
}