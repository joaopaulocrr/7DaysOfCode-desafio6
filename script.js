const paragrafoAdicionarAlimento = document.getElementById('paragrafoAdicionarAlimento')

const categorias = {}
function adicionarItem(categoria, item) {
if (!categorias[categoria]) {
categorias[categoria] = []; // Inicializa a categoria se ainda não existir
}

categorias[categoria].push(item); // Adiciona o item à categoria
}

const yes = document.getElementById('sim')
const no = document.getElementById('nao')
const buttonAdd = document.createElement('button')
let novoItem = ''
const paragrafoEinput = document.getElementById('paragEinput')
const selectCategorias = document.getElementById('selectCategorias')

yes.addEventListener('change', () => {
paragrafoAdicionarAlimento.innerText = 'Qual item você deseja adicionar?'
const inputItem = document.createElement('input')
paragrafoEinput.appendChild(inputItem)
inputItem.style.marginBottom = '12px'
inputItem.setAttribute('id', 'inputItem')
inputItem.focus()

selectCategorias.style.display ='block'

body.appendChild(buttonAdd)
buttonAdd.style.display = 'block'
buttonAdd.textContent = 'Ok'
buttonAdd.setAttribute('id', 'addButton')

buttonAdd.addEventListener('click', () => {
    if(selectCategorias.value == '') {
        alert("Escolha uma categoria para adicionar o item:")
    }else{

        novoItem = inputItem.value
      
        
        adicionarItem(selectCategorias.value, novoItem);
        console.log(categorias);

        inputItem.value = ''
        inputItem.focus()

        for (const prop in categorias) {
            console.log(`${prop}: ${categorias[prop]}`);
         }
    }
})
})
//------------//----------//----------------//-----------------------------//----------------------------//-------------

no.addEventListener('change', () => {

paragrafoAdicionarAlimento.innerText = 'Ok! Aqui está a sua lista de compras atualizada:'

paragrafoEinput.removeChild(inputItem)
body.removeChild(buttonAdd)
selectCategorias.style.display ='none'
for (const prop in categorias) {
    paragrafoAdicionarAlimento.innerHTML +=`<p>${prop}: ${categorias[prop]}</p>`
 }
})