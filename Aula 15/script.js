var issoeumastring = "isso é uma string";
var issoeumnumero = 42;
var issoeumbooleano = true;

console.log(issoeumastring);
console.log(issoeumnumero);
console.log(issoeumbooleano);

var issotambemeumastring = "42";

if (issoeumastring == issotambemeumastring){
    console.log("As strings são iguals");
} else{
    console.log("As strings são diferentes");
}
if (issoeumnumero == issotambemeumastring){
    console.log("As strings são iguals");
} else{
    console.log("As strings são diferentes");
}
if (issoeumnumero === issotambemeumastring){
    console.log("As strings são iguals");
} else{
    console.log("As strings são diferentes");
}

let idade = 14
console.log(idade <15 ? "Criança" : "Adulto");

if(idade < 15){
    console.log("Criança");
}
else if (idade < 25)
{
    console.log("Jovem");
}else if(idade < 60){
    console.log("Adulto");
} else{
    console.log("Idoso");
}
let dia = 3;
let diaextenso = "";
switch (dia){
    case 1: diaextenso = "Domingo"; break;
    case 2: diaextenso = "Segunda"; break;
    case 3: diaextenso = "Terça"; break;
    case 4: diaextenso = "Quarta"; break;
    case 5: diaextenso = "Quinta"; break;
    case 6: diaextenso = "Sexta"; break;
    default: diaextenso = "Sabado"
}
console.log(diaextenso);

for( var i=0; i < 5; i++)
{
    console.log(i)
}
var j = 0
while(j <= 5){
    console.log(j);
    j++;
}



for( var i=0; i < 11; i++)
{
    var n = i%2;
    if(n == 0 ){
        console.log(i);

    }
}
j = 0
while(j != 10){
    var n = j%2;
    if(n == 1 ){
        console.log(j);

    }
    j++;
}