var name = prompt("Qual o seu nome?");
var ola= document.getElementById("header-name");
console.log(name);
ola.innerHTML = ("Olá, " + name) ;

var aceite= confirm("Deseja realizar a prova?");

if(aceite == true){

	//Questão 1
	var n1 = prompt("Quanto é 2 +2?\n 5\n 6 \n 4 ");
	if(n1=="4"){
		alert("Você acertou!")
		var resultado = document.getElementById("certo");
		resultado.innerHTML += ("<p>resposta 1</p>") ;
	}
	else{
		alert("Você errou!")
		 resultado = document.getElementById("errado");
		resultado.innerHTML += ("<p>resposta 1</p>") ;
	}

	//Questão 2

	var n2 = prompt("Quanto é 1 +1? \n 2\n 5 \n 7 ");
	if(n2=="2"){
		alert("Você acertou!")
		resultado = document.getElementById("certo1");
		resultado.innerHTML += ("<p>resposta 2 </p>") ;

	}
	else{
		alert("Você errou!")
		resultado = document.getElementById("errado2");
		resultado.innerHTML += ("<p>resposta 2</p>") ;
	}
	//Questão 3
	var n3 = prompt("Quanto é 10 +2? \n 5\n 12 \n 4 ");
	if(n3=="12"){
		alert("Você acertou!")
		resultado = document.getElementById("certo1");
		resultado.innerHTML += ("<p>resposta 3</p>") ;
	}
	else{
		alert("Você errou!")
		resultado = document.getElementById("errado2");
		resultado.innerHTML += ("<p>resposta 3</p>") ;
	}
}
else{ alert("Adeus!")
}

//Resultado
