let instagram = document.getElementById('instagram');
let defaultColor = instagram.style.color
let valor = 100;
var intervalo;
var decremento = true;

//establecemos valores al div
div.style.width = "120px";
div.style.height = "120px";
div.style.background = "blue";
	
function detener(){
	clearInterval(intervalo);
	//restablecemos valores
	valor = 100;
	decremento = true;
}
		
instagram.addEventListener("onmouseenter", function(){
	intervalo = setInterval(function(){
		if (decremento){
			valor--;
		}
		else {
			valor++;
		}
					
		//al dividir por 100 obtenemos los decimales que toma la funcion opacity
		div.style.opacity = valor / 100;
		
		if (valor == 50) {
			if (div.style.background == "blue"){
				div.style.background = "red";
			}
			else{
				div.style.background = "blue";
			}
			decremento = false;
		}
		
		else if (valor == 100 && !decremento){
			detener()
		}
		
	}, 30); 
		
});