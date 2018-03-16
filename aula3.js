function chal01(){
    var op;
    var array = new Array(1, 2, 3, 4, 5);
   op = prompt(" Digite 1 para add fim \n Digite 2 para add \n Digite 3 para remover \n Digite 4 para listar \n Digite 0 para encerrar");

   switch(op){
       case "1": 
        array.push(6, 7);
        break;
        
        case "2":
        array.unshift(0); //
        break;

        case "3":
        array.splice(3,1); //remove o 4
        break;

        case "4":
        console.log(array);
        break;

        case "0":
        break;

        default:
        alert("invalid number");
        break;
   }
   
   console.log(array);
}