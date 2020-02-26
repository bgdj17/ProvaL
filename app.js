var name = prompt("Digite o seu nome.");
var output = document.getElementById("nameh2");
output.innerHTML= "Seja bem vinda, " + name +"!";

var aceite = confirm("Você gostaria de realizar a prova?")
	if(aceite === true){
		var q1 = prompt("1) Qua o valor de 2 + 2? \n a) 4 \n b) 5\n c) 7" )
		var q2 = prompt("1) Qua o valor de 7 x 2? \n a) 4 \n b) 5\n c) 14" )
		var q3 = prompt("1) Qua o valor de 1 / 1? \n a) 4 \n b) 1\n c) 7" )
		
		var certo = document.getElementById("certo");
		var errado = document.getElementById("errado");
			
		if(q1 == "4"){
			certo.innerHTML="Questão 1";
		}
		else{
			errado.innerHTML+="Questão 1";
		}
			
		if(q2 == "14"){
			certo.innerHTML+="<br>Questão 2";
		}
		else{
			errado.innerHTML+="<br>Questão 2";
		}
		if(q3 == "1"){
			certo.innerHTML+="<br>Questão 3";
		}
		else{
			errado.innerHTML+="<br>Questão 3";
		}
		
		
		
		
			
		}
	
	else {
		alert("Obrigada!")
	}
