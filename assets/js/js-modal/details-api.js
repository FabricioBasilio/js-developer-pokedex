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
  tipo: "",
};

function buscarInformacoes(nome) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      pokemonInformacoes.imagem =
        response.sprites.other.dream_world.front_default;
      pokemonInformacoes.nome = nome.charAt(0).toUpperCase() + nome.slice(1);
      pokemonInformacoes.altura = response.height / 10;
      pokemonInformacoes.peso = response.weight / 10;
      pokemonInformacoes.habilidades = response.abilities.map(
        (i) => i.ability.name
      );
      pokemonInformacoes.tipo = response.types[0].type.name;
      console.log(pokemonInformacoes.tipo);
    });

  setTimeout(() => montarModal(), 500);
}

function montarModal() {
  modalHeader.classList.add(pokemonInformacoes.tipo);

  modalImage.setAttribute("src", pokemonInformacoes.imagem);
  modalImage.setAttribute("alt", pokemonInformacoes.nome);

  modalName.innerText = pokemonInformacoes.nome;

  if (pokemonInformacoes.altura < 1)
    modalAltura.innerText = `${pokemonInformacoes.altura} cm`;
  else modalAltura.innerText = `${pokemonInformacoes.altura} m`;

  modalWeight.innerText = `${pokemonInformacoes.peso} kg`;

  modalHabilidades.innerText = pokemonInformacoes.habilidades.join(", ");
}
