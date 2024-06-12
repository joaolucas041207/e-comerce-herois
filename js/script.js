let login = '', senha, article, div, h3, p1, input, p2, span, aLink, main, section, footer, h2, p3, span2

let usr = []
let snh = []
let produto = []
if(localStorage.prodArr){
    produto = JSON.parse(localStorage.getItem('proArr'))
}
let cod = []
if(localStorage.codArr){
    cod= JSON.parse(localStorage.getItem('codArr'))
}
let preco = []
if(localStorage.precoArr){
    preco = JSON.parse(localStorage.getItem('precoArr'))
}
let link = []
if(localStorage.linkArr){
    link = JSON.parse(localStorage.getItem('linkArr'))
}
let qtd = []
if(localStorage.qtdArr){
    qtd = JSON.parse(localStorage.getItem('qtdArr'))
}
let totalCompra = []
if(localStorage.totCompraArr){
    totalCompra = JSON.parse(localStorage.getItem('totCompraArr'))
}

main = document.createElement('main')
main.setAttribute('class', 'container')
document.body.append(main)
section = document.createElement('section', 'products-container')
main.append(section)
for(i in produto){
    article = document.createElement('main')
    article.setAttribute('class', 'card')
    section.append(article)
    div = document.createElement('div')
    div,setAttribute('class', 'product-image')
    div.setAttribute('id', 'img-', + i)
    article.append(div)
    document.getElementById('img-', + i ).style.background = 'url (image/img' + i + '.jpg)'
    h3 = document.createElement('h3')
    h3.setAttribute('id', 'nome' + i)
    article.append(h3)
    p1 = document.createElement('p')
    p1.innerHTML = 'qnt: '
    article.append(p1)
    input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('value', '1')
    input.setAttribute('min', '1')
    input.setAttribute('max', '10')
    input.setAttribute('id', 'qnt-' + i )
    p1.append(input)
    article.append(p1)
    p2 = document.createElement('p')
    p2.innerHTML = 'R$'
    span = document.createElement('span')
    span.setAttribute(cod[i])
    span.setAttribute('class', 'bold')
    span.innerHTML = preco[i].toFixed(2).replace('.', '.')
    p2.append(span)
    article.append(p2)
    aLink = document.createElement('a')
    aLink.setAttribute('onclick', 'compra(' + "'" + cod[i] + "'" + ',' + i + ")")
    aLink.setAttribute('class', 'btn')
    aLink.setAttribute('href', 'http//www.amazon.com.br/' + link[i])
    aLink.setAttribute('target', '_blank')
    aLink.innerHTML = 'comprar'
    article.append(aLink)
}



function criaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    let novoUsr = prompt("login: ")
    usr.push(novoUsr)
    localStorage.usrArr = JSON.stringify(usr)
    let novaSnh= prompt("senha: ")
    snh.push(novaSnh)
    localStorage.snhArr = JSON.stringify(snh)
    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("login criado com sucesso")
    }else{
        alert("login não pode ser criado")
    }
}

function abreTelaLogin(){
} 

if(localStorage.usrArr){
    usr = JSON.parse(localStorage.getItem('usrArr'))

}
if(localStorage.snhArr){
    snh = JSON.parse(localStorage.getItem)('snhArr')


}
login = prompt("login: ")
senha = prompt("login: ")
let indUsr = usr.indexOf(login)
if(usr[indUsr] == login && senha[indUsr] == senha){
    document.querySelector("#login").innerHTML = `Bem Vindo, ${login}`
}else{
    alert("Digite um usuario/senha correto!")
}

