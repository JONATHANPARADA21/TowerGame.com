let seccion11 = document.querySelector('.uno1');
let seccion21 = document.querySelector('.dos1');
let seccion31 = document.querySelector('.tres1');
let seccion41 = document.querySelector('.cuatro1');

let seccion12 = document.querySelector('.uno2');
let seccion22 = document.querySelector('.dos2');
let seccion32 = document.querySelector('.tres2');
let seccion42 = document.querySelector('.cuatro2');

let seccion13 = document.querySelector('.uno3');
let seccion23 = document.querySelector('.dos3');
let seccion33 = document.querySelector('.tres3');
let seccion43 = document.querySelector('.cuatro3');

const container = document.querySelector('.container');

let pl1_div = document.querySelector('.pl1_div');
let pl2_div = document.querySelector('.pl2_div');
let pl3_div = document.querySelector('.pl3_div');

const container_error = document.querySelector('.container_error')

const img = document.querySelector('.img')

let ganaste = new Audio('ganaste2.mp3');
let soundSelection = new Audio('selection2.mp3');
let enter = new Audio('enter.mp3');

const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);

const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");

let logrado = false;

let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;

function dibujarTiempo(){

	spanMinutos.innerHTML = minutos;
	spanSegundos.innerHTML = segundos;
	spanCentesimas.innerHTML = centesimas;

}

function reiniciar(){

    window.location.reload();


	minutos = 0;
	segundos = 0;
	centesimas = 0;
	dibujarTiempo();
}

function accion1(){

	if(corriendo){
		detener();
		boton0.disabled = false; //No deshabilitado.
	}
	else{
		boton0.disabled = true; //Si, deshabilitado!
		iniciar();
	}
}

function iniciar(){

    if(logrado){
       window.location.reload();

    }

	const sumarMinuto = () => {

		if(minutos < 99) minutos++;
	}

	const sumarSegundo = () => {

		if(segundos === 59){
			segundos = 0;
			sumarMinuto();
		}
		else{
			segundos++;
		}
	}

	const incrementar = () => {

		if(centesimas === 99){
			centesimas = 0;
			sumarSegundo();
		}
		else{
			centesimas++;
		}

		dibujarTiempo();
	}

	corriendo = setInterval(incrementar, 10);
	boton1.innerHTML = "Detener";

}

function detener(){

	clearInterval(corriendo);
	corriendo = null;
	boton1.innerHTML = "Iniciar";
}

dibujarTiempo();

soundSelection.volume = 0.40;
ganaste.volume = 0.40;

let a = 4;
let b = 3;
let c = 2;
let d = 1;

let palo1 = [5,a,b,c,d];
let palo2 = [5];
let palo3 = [5];
let exito = [5,a,b,c,d];

function fichaAMover(pieza,paloInicio,paloFinal){

        let nuevopieza = validarPieza(pieza); 
        let nuevopaloInicio = validarPaloInicio(paloInicio);
        let nuevopaloFinal = validarPaloFinal(paloFinal); 

        let lastNumber = getLastNumber(nuevopaloFinal);

        if(nuevopaloInicio.includes(nuevopieza) && nuevopieza < lastNumber ){
    
           const result = nuevopaloInicio.pop();
           nuevopaloFinal.push(result);
 
           validarPalo1();
           validarPalo2();
           validarPalo3();
    
           validarDibujosPalo1();
           validarDibujosPalo2();
           validarDibujosPalo3();
    
           if(palo2[4] == exito[4] || palo3[4] == exito[4]){
            ganaste.play();
            detener();
            logrado = true;
           }
    
        }else{
            return 'Movimiento no permitido';
    }
}

//lista de funciones:
//getLastNumber()
//validarCampos()
//validarPieza()
//validarPaloInicio()
//validarPaloFinal()
//validarPalo1()
//validarPalo2()
//validarPalo3()
//validarDibujosPalo1()
//validarDibujosPalo2()
//validarDibujosPalo3()

function getLastNumber(paloFinal){  

        if(paloFinal.length == 1){ 
            return paloFinal[0];
        }else if(paloFinal.length == 2){
            return paloFinal[1];
        }else if(paloFinal.length == 3){
            return paloFinal[2];
        }else if(paloFinal.length == 4){
            return paloFinal[3];
        }
    
    } 

function validarCampos(){

    if(input1.value.length > 0 && input2.value.length > 0 && input3.value.length > 0){
        return true;
    }else{
        return false;
    }
}

function validarPieza(pieza){

    if(pieza == '1'){
        return d;
    }else if(pieza == '2'){
        return c;
    }else if(pieza == '3'){
        return b;
    }else if(pieza == '4'){
        return a;
    }
}

function validarPaloInicio(paloInicio){

    if(paloInicio == 'palo1'){
        return palo1;
    }else if(paloInicio == 'palo2'){
        return palo2;
    }else if(paloInicio == 'palo3'){
        return palo3;
    }
}

function validarPaloFinal(paloFinal){

    if(paloFinal == 'palo1'){
        return palo1;
    }else if(paloFinal == 'palo2'){
        return palo2;
    }else if(paloFinal == 'palo3'){
        return palo3;
    }
}

function validarPalo1(){
    if(palo1.length == 5){
        seccion11.innerHTML = palo1[4];
        seccion21.innerHTML = palo1[3];
        seccion31.innerHTML = palo1[2];
        seccion41.innerHTML = palo1[1];
        
       }else if(palo1.length == 4){
        seccion11.innerHTML = '';
        seccion21.innerHTML = palo1[3];
        seccion31.innerHTML = palo1[2];
        seccion41.innerHTML = palo1[1];
       }else if(palo1.length == 3){
        seccion11.innerHTML = '';
        seccion21.innerHTML = '';
        seccion31.innerHTML = palo1[2];
        seccion41.innerHTML = palo1[1];
     
       }else if(palo1.length == 2){
        seccion11.innerHTML = '';
        seccion21.innerHTML = '';
        seccion31.innerHTML = '';
        seccion41.innerHTML = palo1[1];
       }else if(palo1.length == 1){
        seccion41.innerHTML = '';
       }
}

function validarPalo2(){
    if(palo2.length == 5){
        seccion12.innerHTML = palo2[4];
        seccion22.innerHTML = palo2[3];
        seccion32.innerHTML = palo2[2];
        seccion42.innerHTML = palo2[1];

       }else if(palo2.length == 4){
        seccion12.innerHTML = '';
        seccion22.innerHTML = palo2[3];
        seccion32.innerHTML = palo2[2];
        seccion42.innerHTML = palo2[1];

       }else if(palo2.length == 3){
        seccion12.innerHTML = '';
        seccion22.innerHTML = '';
        seccion32.innerHTML = palo2[2];
        seccion42.innerHTML = palo2[1];
     
       }else if(palo2.length == 2){
        seccion12.innerHTML = '';
        seccion22.innerHTML = '';
        seccion32.innerHTML = '';
        seccion42.innerHTML = palo2[1];
       }else if(palo2.length == 1){
        seccion42.innerHTML = '';
       }
}

function validarPalo3(){
    if(palo3.length == 5){
        seccion13.innerHTML = palo3[4];
        seccion23.innerHTML = palo3[3];
        seccion33.innerHTML = palo3[2];
        seccion43.innerHTML = palo3[1];
       }else if(palo3.length == 4){
        seccion13.innerHTML = '';
        seccion23.innerHTML = palo3[3];
        seccion33.innerHTML = palo3[2];
        seccion43.innerHTML = palo3[1];
       }else if(palo3.length == 3){
        seccion13.innerHTML = '';
        seccion23.innerHTML = '';
        seccion33.innerHTML = palo3[2];
        seccion43.innerHTML = palo3[1];
     
       }else if(palo3.length == 2){
        seccion13.innerHTML = '';
        seccion23.innerHTML = '';
        seccion33.innerHTML = '';
        seccion43.innerHTML = palo3[1];
       }else if(palo3.length == 1){
        seccion43.innerHTML = '';
       }
}

function validarDibujosPalo1(){
    if(seccion11.innerHTML == '1'){
        seccion11.classList.add('uno');
    }else{
        seccion11.classList.remove('uno');
    }
    if(seccion21.innerHTML == '1'){
        seccion21.classList.add('uno');
    }else if(seccion21.innerHTML == '2'){
        seccion21.classList.add('dos');
    }else{
        if(seccion21.classList.contains('uno')){
            seccion21.classList.remove('uno');
        }else if(seccion21.classList.contains('dos')){
            seccion21.classList.remove('dos')
        }
    }
    if(seccion31.innerHTML == '1'){
        seccion31.classList.add('uno');
    }else if(seccion31.innerHTML == '2'){
        seccion31.classList.add('dos');
    }else if(seccion31.innerHTML == '3'){
        seccion31.classList.add('tres');
    }else if(seccion31.innerHTML == '4'){
        seccion31.classList.add('cuatro');
    }else{
        if(seccion31.classList.contains('uno')){
            seccion31.classList.remove('uno');
        }else if(seccion31.classList.contains('dos')){
            seccion31.classList.remove('dos');
        }else if(seccion31.classList.contains('tres')){
            seccion31.classList.remove('tres');
        }else if(seccion31.classList.contains('cuatro')){
            seccion31.classList.remove('cuatro');
        }
    }
    if(seccion41.innerHTML == '1'){
        seccion41.classList.add('uno');
    }else if(seccion41.innerHTML == '2'){
        seccion41.classList.add('dos');
    }else if(seccion41.innerHTML == '3'){
        seccion41.classList.add('tres');
    }else if(seccion41.innerHTML == '4'){
        seccion41.classList.add('cuatro');
    }else{
        if(seccion41.classList.contains('uno')){
            seccion41.classList.remove('uno');
        }else if(seccion41.classList.contains('dos')){
            seccion41.classList.remove('dos');
        }else if(seccion41.classList.contains('tres')){
            seccion41.classList.remove('tres');
        }else if(seccion41.classList.contains('cuatro')){
            seccion41.classList.remove('cuatro');
        }
    }
}

function validarDibujosPalo2(){
    if(seccion12.innerHTML == '1'){
        seccion12.classList.add('uno');
    }else{
        seccion12.classList.remove('uno');
    }
    if(seccion22.innerHTML == '1'){
        seccion22.classList.add('uno');
    }else if(seccion22.innerHTML == '2'){
        seccion22.classList.add('dos');
    }else{
        if(seccion22.classList.contains('uno')){
            seccion22.classList.remove('uno');
        }else if(seccion22.classList.contains('dos')){
            seccion22.classList.remove('dos')
        }
    }
    if(seccion32.innerHTML == '1'){
        seccion32.classList.add('uno');
    }else if(seccion32.innerHTML == '2'){
        seccion32.classList.add('dos');
    }else if(seccion32.innerHTML == '3'){
        seccion32.classList.add('tres');
    }else{
        if(seccion32.classList.contains('uno')){
            seccion32.classList.remove('uno');
        }else if(seccion32.classList.contains('dos')){
            seccion32.classList.remove('dos');
        }else if(seccion32.classList.contains('tres')){
            seccion32.classList.remove('tres');
        }
    }
    if(seccion42.innerHTML == '1'){
        seccion42.classList.add('uno');
    }else if(seccion42.innerHTML == '2'){
        seccion42.classList.add('dos');
    }else if(seccion42.innerHTML == '3'){
        seccion42.classList.add('tres');
    }else if(seccion42.innerHTML == '4'){
        seccion42.classList.add('cuatro');
    }else{
        if(seccion42.classList.contains('uno')){
            seccion42.classList.remove('uno');
        }else if(seccion42.classList.contains('dos')){
            seccion42.classList.remove('dos');
        }else if(seccion42.classList.contains('tres')){
            seccion42.classList.remove('tres');
        }else if(seccion42.classList.contains('cuatro')){
            seccion42.classList.remove('cuatro');
        }
    }
}

function validarDibujosPalo3(){
    if(seccion13.innerHTML == '1'){
        seccion13.classList.add('uno');
    }else{
        seccion13.classList.remove('uno');
    }
    if(seccion23.innerHTML == '1'){
        seccion23.classList.add('uno');
    }else if(seccion23.innerHTML == '2'){
        seccion23.classList.add('dos');
    }else{
        if(seccion23.classList.contains('uno')){
            seccion23.classList.remove('uno');
        }else if(seccion23.classList.contains('dos')){
            seccion23.classList.remove('dos')
        }
    }
    if(seccion33.innerHTML == '1'){
        seccion33.classList.add('uno');
    }else if(seccion33.innerHTML == '2'){
        seccion33.classList.add('dos');
    }else if(seccion33.innerHTML == '3'){
        seccion33.classList.add('tres');
    }else{
        if(seccion33.classList.contains('uno')){
            seccion33.classList.remove('uno');
        }else if(seccion33.classList.contains('dos')){
            seccion33.classList.remove('dos');
        }else if(seccion33.classList.contains('tres')){
            seccion33.classList.remove('tres');
        }
    }
    if(seccion43.innerHTML == '1'){
        seccion43.classList.add('uno');
    }else if(seccion43.innerHTML == '2'){
        seccion43.classList.add('dos');
    }else if(seccion43.innerHTML == '3'){
        seccion43.classList.add('tres');
    }else if(seccion43.innerHTML == '4'){
        seccion43.classList.add('cuatro');
    }else{
        if(seccion43.classList.contains('uno')){
            seccion43.classList.remove('uno');
        }else if(seccion43.classList.contains('dos')){
            seccion43.classList.remove('dos');
        }else if(seccion43.classList.contains('tres')){
            seccion43.classList.remove('tres');
        }else if(seccion43.classList.contains('cuatro')){
            seccion43.classList.remove('cuatro');
        }
    }
}

seccion11.innerHTML = palo1[4];
seccion21.innerHTML = palo1[3];
seccion31.innerHTML = palo1[2];
seccion41.innerHTML = palo1[1];

validarDibujosPalo1();

let letra;
let paloDelInicio;
let paloDelFinal;

let click1 = false;
let click2 = false;

let elComienzo = true;

seccion11.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        if(elComienzo){
           accion1();
           elComienzo = false;
           boton1.style.visibility = 'visible';
        }
        click1 = true;
        
    }
    if(click1 == true && click2 == false){
    letra = getLetra(seccion11);
    paloDelInicio = getPaloInicio(seccion11);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo1';
        let numeroAtras = detectarNumeroAtras('pl1_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
        click1 = false;
        click2 = false;
    }
})
seccion21.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion21);
    paloDelInicio = getPaloInicio(seccion21);
}else if(click1 == true && click2 == true){
    console.log('prueba2');
    paloDelFinal = 'palo1';
    let numeroAtras = detectarNumeroAtras('pl1_div');
    if(numeroAtras > letra){
        soundSelection.play();
        fichaAMover(letra,paloDelInicio,paloDelFinal);
    }
    click1 = false;
        click2 = false;
    }
})
seccion31.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion31);
    paloDelInicio = getPaloInicio(seccion31);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo1';
        let numeroAtras = detectarNumeroAtras('pl1_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
        click1 = false;
        click2 = false;
    }
})
seccion41.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion41);
    paloDelInicio = getPaloInicio(seccion41);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo1';
        let numeroAtras = detectarNumeroAtras('pl1_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
        click1 = false;
        click2 = false;
    }
})
seccion12.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion12);
    paloDelInicio = getPaloInicio(seccion12);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo2';
        let numeroAtras = detectarNumeroAtras('pl2_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
        click1 = false;
        click2 = false;
    }
})
seccion22.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion22);
    paloDelInicio = getPaloInicio(seccion22);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo2';
        let numeroAtras = detectarNumeroAtras('pl2_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
        click1 = false;
        click2 = false;
    }
})
seccion32.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion32);
    paloDelInicio = getPaloInicio(seccion32);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo2';
        let numeroAtras = detectarNumeroAtras('pl2_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
        click1 = false;
        click2 = false;
    }
})
seccion42.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion42);
    paloDelInicio = getPaloInicio(seccion42);

    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo2';
        let numeroAtras = detectarNumeroAtras('pl2_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
      click1 = false;
      click2 = false;
    }
    
})
seccion13.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion13);
    paloDelInicio = getPaloInicio(seccion13);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo3';
        let numeroAtras = detectarNumeroAtras('pl3_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
            console.log('prueba3');
        }
        click1 = false;
        click2 = false;
    }
})
seccion23.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion23);
    paloDelInicio = getPaloInicio(seccion23);
    console.log('prueba1')
    
    }else if(click1 == true && click2 == true){
        console.log('prueba2');
        paloDelFinal = 'palo3';
        let numeroAtras = detectarNumeroAtras('pl3_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
            console.log('prueba3');
        }
        click1 = false;
        click2 = false;
    }
})
seccion33.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion33);
    paloDelInicio = getPaloInicio(seccion33);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo3';
        let numeroAtras = detectarNumeroAtras('pl3_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
        }
        click1 = false;
        click2 = false;
    }
})
seccion43.addEventListener('click',()=>{
    if(click1 == true){
        click2 = true;
    }else{
        click1 = true;
    }
    
    if(click1 == true && click2 == false){
    letra = getLetra(seccion43);
    paloDelInicio = getPaloInicio(seccion43);
    
    }else if(click1 == true && click2 == true){
        paloDelFinal = 'palo3';
        let numeroAtras = detectarNumeroAtras('pl3_div');
        if(numeroAtras > letra){
            soundSelection.play();
            fichaAMover(letra,paloDelInicio,paloDelFinal);
            
        }
        click1 = false;
        click2 = false;
    }
})

//lista Funciones:
//detectarNumeroAtras()
//getLetra()
//getPaloInicio()
//getValue()
//transformarLetrasANumeros()

function detectarNumeroAtras(x_palo){
    let nuevoPalo;
    if(x_palo == 'pl1_div'){
        nuevoPalo = palo1;
    }else if(x_palo == 'pl2_div'){
        nuevoPalo = palo2;
    }else if(x_palo == 'pl3_div'){
        nuevoPalo = palo3;
    }
    if(nuevoPalo.length == 5){
        return nuevoPalo[3];
    }else if(nuevoPalo.length == 4){
        return nuevoPalo[2];
    }else if(nuevoPalo.length == 3){
        return nuevoPalo[1];
    }else if(nuevoPalo.length == 1){
        return 5;
    }
    if(nuevoPalo.length == 2){
        return nuevoPalo[0]
    }
}

function getLetra(div){
    if(div.classList.contains('uno')){
        return d;
    }else if(div.classList.contains('dos')){
        return c;
    }else if(div.classList.contains('tres')){
        return b;
    }else if(div.classList.contains('cuatro')){
        return a;
    }
}

function getPaloInicio(div){
     let nuevoPalo1 = 'palo1';
     let nuevoPalo2 = 'palo2';
     let nuevoPalo3 = 'palo3';
    if(div.parentElement.className == 'pl1_div'){
        return nuevoPalo1;
    }else if(div.parentElement.className == 'pl2_div'){
        return nuevoPalo2;
    }else if(div.parentElement.className == 'pl3_div'){
        return nuevoPalo3;
    }
}

function getValue(div){
    let ready = '';
    if(div.classList.contains('uno')){
        return 1;
    }else if(div.classList.contains('dos')){
        return 2;
    }else if(div.classList.contains('tres')){
        return 3;
    }else if(div.classList.contains('cuatro')){
        return 4;
    }else{
        return ready;
    }
}

function transformarLetraANumeros(x_valueSeccion){
   
    if(x_valueSeccion == 'uno'){
       return 1;
    }else if(x_valueSeccion == 'dos'){
        return 2;
    }else if(x_valueSeccion == 'tres'){
        return 3;
    }else if(x_valueSeccion == 'cuatro'){
        return 4;
    }
}

seccion11.innerHTML = palo1[4];
seccion21.innerHTML = palo1[3];
seccion31.innerHTML = palo1[2];
seccion41.innerHTML = palo1[1];

validarDibujosPalo1();

//funciones Totales:
//getLastNumber()
//validarCampos()
//validarPieza()
//validarPaloInicio()
//validarPaloFinal()
//validarPalo1()
//validarPalo2()
//validarPalo3()
//validarDibujosPalo1()
//validarDibujosPalo2()
//validarDibujosPalo3()
//detectarNumeroAtras()
//getLetra()
//getPaloInicio()
//getValue()
//transformarLetrasANumeros()

    





       



