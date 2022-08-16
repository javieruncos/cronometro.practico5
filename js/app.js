
let contadorSegundos = 0;
let contadorMinutos = 0

// let play = addEventListener("click",Recarga);
// let stop = addEventListener("click");
let play ;


function Segundos(){

    let minutos = document.getElementById("minutos")
//    minutos.innerHTML=contador

    let segundos = document.getElementById("segundos");
    
    contadorSegundos++
    
    minutos.innerHTML = "0" +  contadorMinutos;
    if(contadorSegundos >= 60){
        contadorSegundos = 0;
        contadorMinutos++
    }
    if(contadorMinutos >= 10){
        minutos.innerHTML = "" + contadorMinutos;
    }
    
    segundos.innerHTML= "0" + contadorSegundos; 
    if(contadorSegundos >=10){
    segundos.innerHTML = "" + contadorSegundos;
   }
    

}

function Recarga(){
    
   play = setInterval(Segundos,1000);
}


function stop(){
   clearInterval(play)
}


function refresh(){

}
  


