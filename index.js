document.addEventListener('DOMContentLoaded', () =>{
    function createDivElementToContainer(text, className){
    const container = document.getElementById('container');
    // const container = document.querySelector('#container');

    const newElement = document.createElement('div');
    newElement.innerHTML = text;
    newElement.classList.add(className);
    container.appendChild(newElement);
    }
    
    createDivElementToContainer('i am blueviolet', 'container-child-1');
    createDivElementToContainer('i am red', 'container-child-2');
    createDivElementToContainer('i am green', 'container-child-3');
});