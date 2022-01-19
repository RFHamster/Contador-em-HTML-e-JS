var contador = 0;

function addEventos(){
    var add = document.getElementById("adicionar");
    var sub = document.getElementById("subtrair");
    add.addEventListener("click",function(event){
    
        var currentNumberHtml = document.getElementById('currentNumber');
	    contador++;
        if(contador > 10){
            contador = 10;
        }
	    currentNumberHtml.innerHTML = contador;
        if(contador < 0){
            currentNumberHtml.style.color = 'red';
        }else{
            currentNumberHtml.style.color = 'black';
        }

    });
    sub.addEventListener("click",function(event){
        var currentNumberHtml = document.getElementById('currentNumber');
        contador--;
        if(contador < -10){
            contador = -10;
        }
        currentNumberHtml.innerHTML = contador;
        if(contador < 0){
            currentNumberHtml.style.color = 'red';
        }else{
            currentNumberHtml.style.color = 'black';
        }
    });
}
window.addEventListener("load",addEventos);