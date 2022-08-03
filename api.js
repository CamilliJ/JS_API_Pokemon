var imagem = document.getElementById("img-pokemon")
var id = document.getElementById("idpokemon")
var nome = document.getElementById("nome-pokemon")
var nomeprincipal = document.getElementById("nome-pokemon-princ") 
var passar = document.getElementById("passar")
var voltar = document.getElementById("voltar")
var main = document.getElementById("main")
var input = document.getElementById("input")
var ok = document.getElementById("ok")
var pokemon = 1


async function importar(pokemon) {
    var api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    var dados = await api.json();
    return dados
}

async function mostrarDados(pokemon) {
    nome.innerHTML = "Nome"
    var dados = await importar(pokemon)
    
    if (dados) {
        
        imagem.style.display = "block";
        nome.innerHTML = dados.name
        id.innerHTML = dados.id
        imagem.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        pokemon = dados.id

        if (dados.types[0].type.name == "grass"){
            main.style.backgroundColor = "#9FE2BF"
            passar.style.backgroundColor = "#27AE60"
            voltar.style.backgroundColor = "#27AE60"
        }else if (dados.types[0].type.name == "fire"){
            main.style.backgroundColor = "#F5B7B1"
            passar.style.backgroundColor = "#E74C3C"
            voltar.style.backgroundColor = "#E74C3C"
        }else if (dados.types[0].type.name == "water"){
            main.style.backgroundColor = "#AED6F1"
            passar.style.backgroundColor = "#3498DB"
            voltar.style.backgroundColor = "#3498DB"
        }else if (dados.types[0].type.name == "bug"){
            main.style.backgroundColor = "#F9E79F"
            passar.style.backgroundColor = "#F1C40F"
            voltar.style.backgroundColor = "#F1C40F"
        }else if (dados.types[0].type.name == "normal"){
            main.style.backgroundColor = "#E5E8E8"
            passar.style.backgroundColor = "#7F8C8D"
            voltar.style.backgroundColor = "#7F8C8D"
        }

        console.log(dados.types[0])
    } else {
        imagem.style.display = "none";
        nome.innerHTML = "Pokemon não existe"
    }
}



passar.addEventListener('click', () => {
    
    if (pokemon >= 1) {
        pokemon += 1
        
        mostrarDados(pokemon)
    }
})

voltar.addEventListener('click', () => {
    if (pokemon < 905) {
        pokemon -= 1
        mostrarDados(pokemon)
    }
})

ok.addEventListener('click', () => {
    if (input != "") {
        pokemon = input.value.toLowerCase()
        mostrarDados(pokemon)
        input.value = ""
    }
})

mostrarDados(pokemon)