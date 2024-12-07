/*Ejercicio 3*/
const pintarnegro = document.querySelectorAll('div')

pintarnegro.forEach (div =>{
    div.addEventListener('click', () => {
        div.style.backgroundColor = 'black';
    })
});

const divs = document.querySelectorAll('div')
const pintarDiv = (index, color) => {
    if (divs[index]) {
        divs[index].style.backgroundColor = color;
    }
};

const crearnuevodiv = (color) =>{
const nuevodiv = document.createElement('div')
nuevodiv.style.backgroundColor = color;
nuevodiv.style.width = '200px';
nuevodiv.style.height = '200px';
document.body.appendChild(nuevodiv); 
    }

document.addEventListener('keydown', (event) => {
    if(event.key === 'a'){
        pintarDiv(0, 'pink')
    }
    else if(event.key === 's'){
        pintarDiv(1, 'orange')
    }
    else if(event.key === 'd'){
        pintarDiv(2, 'skyblue')
    }
    else if(event.key === 'q'){
        crearnuevodiv('violet')
    }else if(event.key === 'w'){
        crearnuevodiv('gray')
    }else if(event.key === 'e'){
        crearnuevodiv('brown')
    }

})

