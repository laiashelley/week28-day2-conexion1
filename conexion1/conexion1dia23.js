const urlPokemon1 = "https://pokeapi.co/api/v2/pokemon/150";

fetch(urlPokemon1)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.species.name);
        let nombrePokemon1 = data.species.name.toUpperCase();
        document.getElementById("pokemonNombre1").innerHTML = nombrePokemon1;
        document.getElementById("pokemonImage1").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png";

        let tipoPokemon1 = data.types[0].type.name;
        document.getElementById("pokemonTipo1").innerHTML = "Tipo: " + tipoPokemon1.toUpperCase();

        let pesoPokemon1 = data.weight;
        document.getElementById("pokemonPeso1").innerHTML = "Peso: " + pesoPokemon1 + "kg";

        let habilidadesMewtwo1 = data.abilities[0].ability.name;
        document.getElementById("mewtwo1").innerHTML = "Habilidad 1: " + habilidadesMewtwo1.toUpperCase();
        let habilidadesMewtwo2 = data.abilities[1].ability.name;
        document.getElementById("mewtwo2").innerHTML = "Habilidad 2: " + habilidadesMewtwo2.toUpperCase();
    })
    .catch((err) => console.log(err));


const urlPokemon2 = "https://pokeapi.co/api/v2/pokemon/151";

fetch(urlPokemon2)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.species.name);
        let nombrePokemon2 = data.species.name.toUpperCase();
        document.getElementById("pokemonNombre2").innerHTML = nombrePokemon2;
        document.getElementById("pokemonImage2").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png";

        let tipoPokemon2 = data.types[0].type.name;
        document.getElementById("pokemonTipo2").innerHTML = "Tipo: " + tipoPokemon2.toUpperCase();

        let pesoPokemon2 = data.weight;
        document.getElementById("pokemonPeso2").innerHTML = "Peso: " + pesoPokemon2 + "kg";

        let habilidadesMew1 = data.abilities[0].ability.name;
        document.getElementById("mew1").innerHTML = "Habilidad 1: " + habilidadesMew1.toUpperCase();
        let habilidadesMew2 = data.abilities[1].ability.name;
        document.getElementById("mew2").innerHTML = "Habilidad 2: " + habilidadesMew2.toUpperCase();


    })
    .catch((err) => console.log(err));
