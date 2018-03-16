function exe01(){
    var ind;
    var vet = new Array();
ind = prompt("Digite o tamanho do vetor ")
for(var i = 1;i<=ind;i++){
   vet[i]=prompt("Digite o "+i+"o numero")
}

for(var i=vet.length-1;i>0;i--){
    console.log(vet[i]);
}    
}

function exe02(){
    var dias = new Array("Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado");
    var temp = new Array();
    var med=0;
    var maior=0;

    for(var i=0;i<7;i++){
        temp[i] = Math.floor(Math.random()*50 + 1);
        alert(dias[i]+" "+temp[i]+" graus ");
        med+=temp[i];
        if(temp[i]>maior)
        maior=temp[i]
    }
    med=med/7;
    alert("Maior temperaura é "+maior);
    alert("A média é "+med);
    for( var i = 0; i<7 ; i++){
        
        if(temp[i]<med){
            alert("Menor que a média "+temp[i]) 
        }
    }
}

function exe03(){
    var vetor = ["A", "B", "C", "D", "E"];
var remov = vetor.splice(1, 2); // Remove o segundo e terceiro elementos do vetor.

console.log("removidos"+remov); // ["B", "C"]
alert(vetor); // ["A", "D", "E"]
}

function exe04(){
    var vet = new Array();

    for(i=0;i<10;i++){
       vet[i] = prompt("Digite um número")
    }

vet.pop();
console.log("array sem o ultimo elemento "+vet);

vet.shift();
console.log("array sem o primeiro elemento "+vet);
}

function exe05(){
class Contato{
    constructor(nome, tel, end){
        this.nome=nome;
        this.tel=tel;
        this.end=end;
    }

    printContato(){
        console.log('Nome: '+this.nome);
        console.log('Telefone: '+this.tel);
        console.log('end:'+this.end);
    }
    
}
let cont= new Contato("Igor",987927,"Rua Central");

cont.printContato();
}