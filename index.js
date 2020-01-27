const $ = document.querySelector.bind(document)
const formProduto = $("#formProduto")
const inputProduto = $("#produto")
const inputValor = $("#valor")
const tableProduto = $("#table")

function handleSubmitForm (event){
    event.preventDefault()
    const data = getData()
    createDataTable(data)

}

function handleDelete(event){

    event.target.parentElement.parentElement.remove()

}

function handleDeleteAll(){
   tableProduto.lastElementChild.innerHTML= ""
}

function getData(){
    const produto = inputProduto.value
    const valor = inputValor.value  
    inputProduto.value = ""
    inputValor.value = ""

    const produtoCadastrado = {
        nome: produto,
        valor: valor    
    }
    return produtoCadastrado
}

function createDataTable(produto){
    const tableRow = createTableRow()
    const tableDataProduto = createTableData(produto.nome)
    const tableDataValor = createTableData(`R$ ${produto.valor}`)
    const button = createButton ("Deletar", handleDelete)
    const tableButton = createTableData(button)
    tableRow.appendChild(tableDataProduto)
    tableRow.appendChild(tableDataValor)
    tableRow.appendChild(tableButton)
    tableProduto.children[1].appendChild(tableRow)
   

}


function createTableData(valor){
    const data = document.createElement("td")
    
    if (typeof valor === "string"){
        data.textContent = valor
    }else{
        data.appendChild(valor)
    }

    return data
    
}

function createTableRow(){
    const row = document.createElement("tr")
    return row
}

function createButton (text, callback){
  const button = document.createElement("button")
  button.textContent = text
  button.onclick = callback
  
  return button

}


formProduto.addEventListener('submit', handleSubmitForm)    