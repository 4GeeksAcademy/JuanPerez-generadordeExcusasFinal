import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarExcusa () {
    const sujeto = ["Mi Perro", "Mi Abuela" , "El cartero" ,  "Mi Pajaro" ];
    const acciones = ["Comio" , "Orino" , "Aplasto" , "Rompio"];
    const objeto = ["Mi tarea" , "Mi Movil" , "Mi Carro"];
    const cuando = ["Despues de Clases" , "Cuando estaba durmiendo" , "Mientras hacia ejercicio" , "Durante mi almuerzo" , "Mientras estaba orando"];
    
    //En cada una de las const que arriba tenemos, estamos usando los arrys con sus respectivos elementos para poder tener la estructura de la oracion (excusa) que queremos armar//

    const personas = sujeto [Math.floor(Math.random()*sujeto.length)];
    const reaccion = acciones [Math.floor(Math.random()*acciones.length)];
    const instrumento = objeto [Math.floor(Math.random()*objeto.length)];
    const momento = cuando [Math.floor(Math.random()*cuando.length)];

    // en las funciones que arriba se presentan tenemos las variables de cada uno de los arrys multiplicados por math.random 
    // la cual nos da un numero aleatorio entre 0 y 1 y lo ultiplica (en este caso) por la cantidad de elementos que contenta el array indicado
    // y a su vez con math.floor nos ayuda a que este numero dado que puede ser entero o con decimales, se convierta en entero llevandolo en aproximacion hacia abajo

    const excusa = `${personas} ${reaccion} ${instrumento} ${momento}`;

    // por ultimo se agrega la variable para darle estructura a la oracion o excua que queremos que se muestre
    
    document.querySelector("#excuse").innerHTML = excusa
  
  }
  generarExcusa()
  //write your code here
  console.log("Hello Rigo from the console!");

};