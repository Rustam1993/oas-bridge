document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

let otherNode = 'OAS BRIDGE';


let logo = document.getElementById('logo');

let a = document.getElementsByClassName('page')[0];

console.log(a);
console.log(a.firstElementChild.firstElementChild.innerHTML)


if(window.innerWidth<=600){



if(a.firstElementChild.firstElementChild.innerHTML!==otherNode)
{
  logo.style.display = "none"
  console.log('not a home page')
}
}







