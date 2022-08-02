var imagem = document.getElementById("img-pokemon")
var nome = document.getElementById("nome-pokemon")
var passar = document.getElementById("passar")
var voltar = document.getElementById("voltar")
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
        imagem.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        numero.value = ""
        pokemon = dados.id
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

mostrarDados(pokemon)