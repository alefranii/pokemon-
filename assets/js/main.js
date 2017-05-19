function Pokemon(nombre,imagen,nivelDeAmistad,vida,poderDeAtaque){
	
	this.nombre = nombre;
	this.imagen = imagen;
	this.nivelDeAmistad = nivelDeAmistad;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("hola,soy: "+this.nombre + " y soy : " + this.imagen)

	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad =this.nivelDeAmistad + valor

	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida -this.poderDeAtaque

	}
}
function pelea(){
	var player1 = document.getElementById("pokemon1").value;
	var player2 = document.getElementById("pokemon2").value;
	var numRandom = Math.floor((Math.random() * 100) + 1);
	var pokemon1 = new Pokemon(player1,"imagen pokemon",0,201,numRandom);
	var pokemon2 = new Pokemon(player2,"imagen pokemon",0,100,numRandom);

	if (pokemon1.nombre==pokemon2.nombre){
		alert("vamo' a calmarnos! Debes eligir un rival y no puedes pelear contra los de tu mismo tipo ")
	}else{
		pokemon1.atacar(pokemon2);


		alert (pokemon1.nombre + " atacó a " + pokemon2.nombre + " y a " + pokemon2.nombre + " le queda "+ pokemon2.vida + " de SOBREVIVENCIA")
   //var ganador = document.getElementById("resultado");
   //var winner = (pokemon1.nombre + " ataco a "  + pokemon2.nombre + " este ahora tiene "  + pokemon2.vida)
   //ganador.innerHTML= winner;   
}
}


//const Pikachu = new Pokemon("Pikachu",<img src="assets/img/010-pikachu.png" width:"150>,0,20,numRandom)
//const Charmander = new Pokemon("Charmander","rojo",0,20,numRandom)
//const Bulbasaur = new Pokemon("Bulbasaur","rosado",0,10,numRandom)
//const Snorlax = new Pokemon("Snorlax","plomo",0,15,numRandom)
//const Mankey = new Pokemon("Mankey","burdeo",0,30,numRandom)
//const Squirtle = new Pokemon("Squirtle","celeste",0,50,numRandom)
//const Abra = new Pokemon("Abra","azul",0,80,numRandom)


//Pikachu.atacar(Charmander)

//console.log(Charmander.vida)
