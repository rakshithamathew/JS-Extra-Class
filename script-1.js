const element = document.getElementsByTagName("h1");
console.log(element[0].innerText);

const element2= document.getElementsByClassName("heading");
console.log(element2[0].innerHTML);

const element3= document.getElementById("head");
console.log(element3.innerHTML);

function clickme(){
    const text= document.getElementsByTagName("h2");
    text[0].innerText = 'Good Bye';
    text[0].style.color='Blue';
}

function innerText(){
    const element4 = document.getElementById('header');
    alert(element4.innerText);
}

function innerHtml(){
    const element5 = document.getElementById('header');
    alert(element5.innerHTML);
}

function create(){
    const element6 = document.createElement('span');
    element6.setAttribute("id","ele");
    element6.innerText = "Element Displayed here!";
    console.log(element6);

    const parent = document.getElementById('parent');
    parent.appendChild(element6);
}
