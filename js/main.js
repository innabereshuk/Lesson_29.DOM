(function(){
     'use strict';

    // Создать страницу, которая выводит нумерованный список песен: 

     var playList = [
        {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
        },
        {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
        },
        {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
        },
        {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
        },
        {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
        },
        {
        author: "AC/DC",
        song:"BACK IN BLACK"
        },
        {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
        },
        {
        author: "METALLICA",
        song:"ENTER SANDMAN"
        }
    ];

    let ul = document.createElement('ul');
        ul.innerHTML = `<b>Список песен</b>`.toUpperCase();
        document.body.append(ul);
        
        let li = [];
        for (let i in playList) { 
            li.push(`<li>${playList[i].author} - ${playList[i].song}</li>`);
        }
        
        li.innerHTML = li.sort().join('\u00A0');
        ul.innerHTML = ul.innerHTML + li.innerHTML;
       
     
   
          

    console.log(li);

 // Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет

// 1. Создаю на странице три круга разного цвета и кнопку

let divRed = document.createElement('div');
    divRed.style.width = '150px';
    divRed.style.height = '150px';
    divRed.style.borderRadius = '50%';
    divRed.style.backgroundColor = 'red';
    divRed.style.marginBottom = "10px";
    
    document.body.append(divRed);
    
let divYellow = document.createElement('div');
    divYellow.style.width = '150px';
    divYellow.style.height = '150px';
    divYellow.style.borderRadius = '50%';
    divYellow.style.marginBottom = "10px";
    divYellow.style.backgroundColor = 'yellow';
    
    document.body.append(divYellow);
    
let divGreen = document.createElement('div');
    divGreen.style.width = '150px';
    divGreen.style.height = '150px';
    divGreen.style.borderRadius = '50%';
    divGreen.style.marginBottom = "10px";
    divGreen.style.backgroundColor = 'green';
    
    document.body.append(divGreen);
    
    
let button = document.createElement('button');
    button.innerHTML = 'Нажми меня!';
    document.body.appendChild(button);



//  2. Создаю функцию, которая будет проверять смену цвета каждого куруга при каждом последовательном нажатии, при червертом нажатии начинает сначала  

let time = 0;

function colorChange() {
    time++;

    if(time == 4){
        time = 1;
    }
    

    if (time == 1) {
        divRed.style.backgroundColor = 'green';
        divYellow.style.backgroundColor = 'red';
        divGreen.style.backgroundColor = 'yellow';
    
        } else if (time == 2) {
            divRed.style.backgroundColor = 'yellow';
            divYellow.style.backgroundColor = 'green';
            divGreen.style.backgroundColor = 'red';
            } else if (time == 3) {
                divRed.style.backgroundColor = 'red';
                divYellow.style.backgroundColor = 'yellow';
                divGreen.style.backgroundColor = 'green';
            }
        };
 
// 3. Запускаю при нажатии на кнопку функцию, проверяющую сколько нажатий было сделано. При 4-ом нажатии сбрасывает на начало        
        
button.addEventListener('click', () => {
    colorChange();
});
    
      
    



    


})();