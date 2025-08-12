// informações para a requisição
// - imagem
// - altura
// - peso
// - habilidades

// ao clicar no nome do pokemon, ele detectará pelo clique o nome e faz a requisição pelo nome

// url `https://pokeapi.co/api/v2/pokemon (nome)`

let pokemonInformacoes = {
  imagem: "",
  nome: "",
  altura: "",
  peso: "",
  habilidades: "",
};

function buscarInformacoes(nome) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      pokemonInformacoes.imagem =
        response.sprites.other.dream_world.front_default;
      pokemonInformacoes.nome = response.name;
      pokemonInformacoes.altura = response.height;
      pokemonInformacoes.peso = response.weight;
      pokemonInformacoes.habilidades = response.abilities.map(
        (i) => i.ability.name
      );
    });

    montarModal();
}

function montarModal() {
    alert("montarei o " + modal + " de " + pokemonInformacoes)
}
