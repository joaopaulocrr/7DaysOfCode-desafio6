const paragrafoAdicionarAlimento = document.getElementById('paragrafoAdicionarAlimento')
const body = document.getElementById('corpo')
const categorias = {}
function adicionarItem(categoria, item) {
    if (!categorias[categoria]) {
        categorias[categoria] = []; // Inicializa a categoria se ainda não existir
    }

    categorias[categoria].push(item); // Adiciona o item à categoria
}
function removerItem(categoria, item) {
    if (!categorias[categoria]) {
        categorias[categoria] = []; // Inicializa a categoria se ainda não existir
    }

    categorias[categoria].splice(item); // Adiciona o item à categoria
}

const yes = document.getElementById('sim')
const no = document.getElementById('nao')
const buttonAdd = document.createElement('button')
const buttonRemove = document.createElement('button')
let novoItem = ''
const paragrafoEinput = document.getElementById('paragEinput')
const selectCategorias = document.getElementById('selectCategorias')

yes.addEventListener('change', () => {
    paragrafoAdicionarAlimento.innerText = 'Qual item você deseja adicionar/remover?'
    const inputItem = document.createElement('input')
    paragrafoEinput.appendChild(inputItem)
    inputItem.style.marginBottom = '12px'
    inputItem.setAttribute('id', 'inputItem')
    inputItem.focus()

    selectCategorias.style.display = 'block'

    body.appendChild(buttonAdd)
    buttonAdd.textContent = 'Adicionar'
    buttonAdd.style.backgroundColor = 'lightgreen'
    buttonAdd.style.cursor = 'pointer'
    buttonAdd.setAttribute('id', 'addButton')

    body.appendChild(buttonRemove)
    buttonRemove.style.backgroundColor = 'red'
    buttonRemove.style.cursor = 'pointer'
    buttonRemove.textContent = 'Remover'
    buttonRemove.setAttribute('id', 'addButton')

    buttonAdd.addEventListener('click', () => {
        if (selectCategorias.value == '') {
            alert("Escolha uma categoria para adicionar/remover o item:")
        } else {
            if (inputItem.value == '') {
                alert('Nenhum item informado!!!')
            } else {

                novoItem = inputItem.value
                adicionarItem(selectCategorias.value, novoItem);
                inputItem.value = ''
            }
            inputItem.focus()

            for (const prop in categorias) {
                console.log(`${prop}: ${categorias[prop]}`);
            }
        }
    })

    buttonRemove.addEventListener('click', () => {
        if (selectCategorias.value == '') {
            alert("Escolha uma categoria para adicionar/remover o item:")
        } else {
            if (inputItem.value == '') {
                alert('Nenhum item informado!!!')
            } else {

                novoItem = inputItem.value
                removerItem(selectCategorias.value, novoItem);
                inputItem.value = ''
            }
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
    body.removeChild(buttonRemove)
    selectCategorias.style.display = 'none'
    for (const prop in categorias) {
        paragrafoAdicionarAlimento.innerHTML += `<p>${prop}: ${categorias[prop]}</p>`
    }
})