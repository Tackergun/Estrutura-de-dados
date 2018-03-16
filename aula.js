function exe02(){
var custoFabrica;
var custoConsumidor;
var newVal

custoFabrica = prompt("Digite o valor do cust de fabrica");

custoFabrica*=1.28;
newVal = custoFabrica;
newVal*=1.45;

alert("o custo fica "+parseFloat(newVal).toFixed(2));
}

function exe03(){
    var prodVal
    var newVal
do{
    prodVal = prompt("Valor do produto");
    
    prodVal*=1.12;
    prodVal = Math.round(prodVal);
    alert(prodVal);
}while(prodVal!=0);
}

function exe04(){
    var dado;
    var soma=0;

for(var i=0;i<6;i++){
    dado = (Math.floor(Math.random()* 6 + 1));
    soma += dado;
}
alert(soma);
}
 
function exe05(){
    var mes;
mes = prompt("Digite o mes")
do{

switch (mes) {
    case "1":
        mes = 'Janeiro';
        alert(mes)
        break;
    case "2":
        alert("Fevereiro");
        break;
    case "3":
        alert("Março");
        break;
    case "4":
        alert("Abril");
        break;
    case "5":
        alert("Maio");
        break;
    case "6":
        alert("Junho");
        break;
    case "7":
        alert("Julho");
        break;
    case "8":
        alert("Agosto");
        break;
    case "9":
        alert("Setembro");
        break;
    case "10":
        alert("Outubro");
        break;
    case "11":
        alert("Novembro");
        break;
    case "12":
        alert("Dezembro");
        break;
}
} while(mes < 0 || mes > 12)
}

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}