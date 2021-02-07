//declaramos variable
var toro = document.getElementById("toro");
var silla = document.getElementById("silla");
var plato = document.getElementById("plato");
var tenedor = document.getElementById("tenedor");
var cuchillo = document.getElementById("cuchillo");
var polloFrito = document.getElementById("pollo");
var ensalada = document.getElementById("ensalada");
var jarra = document.getElementById("jarra");
var vaso = document.getElementById("vaso");

let moverSilla = document.getElementById('moverSilla');
//asociamos el listener con el evento click
moverSilla.addEventListener('click', ()=>{
    mover();
});

function mover(){
    silla.style.animation = "silla 3s linear forwards";
}


let moverToro = document.getElementById('moverToro');
//asociamos el listener con el evento click
moverToro.addEventListener('click', ()=>{
    moverT();
});

function moverT(){
    toro.style.animation = "toro 3s linear forwards";
}


let moverPlato = document.getElementById('moverPlato');
//asociamos el listener con el evento click
moverPlato.addEventListener('click', ()=>{
    moverP();
});

function moverP(){
    plato.style.animation = "plato 3s linear forwards";
}


let moverTenedor = document.getElementById('moverTenedor');
//asociamos el listener con el evento click
moverTenedor.addEventListener('click', ()=>{
    moverTen();
});

function moverTen(){
    tenedor.style.animation = "tenedor 3s linear forwards";
}


let moverCuchillo = document.getElementById('moverCuchillo');
//asociamos el listener con el evento click
movercuchillo.addEventListener('click', ()=>{
    moverC();
});

function moverC(){
    cuchillo.style.animation = "cuchillo 3s linear forwards";
}

let moverChicken = document.getElementById('moverFrito');
//asociamos el listener con el evento click
moverChicken.addEventListener('click', ()=>{
    movP();
});

function movP(){
    pollo.style.animation = "polloFrito 3s linear forwards";
}




let moverEnsalada = document.getElementById('moverEnsalada');
//asociamos el listener con el evento click
moverEnsalada.addEventListener('click', ()=>{
    moverE();
});

function moverE(){
    ensalada.style.animation = "ensalada 3s linear forwards";
}


let moverJarra = document.getElementById('moverJarra');
//asociamos el listener con el evento click
moverJarra.addEventListener('click', ()=>{
    moverJ();
});

function moverJ(){
    jarra.style.animation = "jarra 3s linear forwards";
}


let moverVaso = document.getElementById('moverVaso');
//asociamos el listener con el evento click
moverVaso.addEventListener('click', ()=>{
    moverV();
});

function moverV(){
    vaso.style.animation = "vaso 3s linear forwards";
}






