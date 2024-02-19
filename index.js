let dino = document.querySelector('.dino');

let cactus = document.querySelector('.cactus');

let doublecactus = document.querySelector('.doublecactuscontainer');





function jump(){

  let  random = Math.random();
  console.log(random);

    if(!dino.classList.contains("dino-animation")){
    dino.classList.add("dino-animation");

    setTimeout(() =>
    {
        dino.classList.remove("dino-animation");
    },800);

    }

    if(random >= 0 && random <= 1/4 && !cactus.classList.contains("cactus-animation")){
        cactus.classList.remove("cactus-animation");
        cactus.classList.add("cactus-animation");
        
    }else if(random > 1/4 && random <=1 && !doublecactus.classList.contains("cactus-animation")){
        doublecactus.classList.remove("doublecactus-animation");
        doublecactus.classList.add("doublecactus-animation");
    }

    document.querySelector('.display').innerText = '';
    
}


let checkdead = setInterval(function (){
    let dinobottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    let doublecactusleft = parseInt(window.getComputedStyle(doublecactus).getPropertyValue("left"));

    if(dinobottom < 35 && cactusleft < 60 && cactusleft >0 ){
      
        alert("you lose");

        cactus.classList.remove("cactus-animation");

        doublecactus.classList.remove("cactus-animation");

        document.querySelector('.display').innerText ='Press Any Key to Start';

    }else if(dinobottom < 35 && doublecactusleft < 60 && doublecactusleft >0){

        alert("you lose");

        cactus.classList.remove("cactus-animation");

        doublecactus.classList.remove("doublecactus-animation");

        document.querySelector('.display').innerText ='Press Any Key to Start';

    }

    
    


} ,10

);



