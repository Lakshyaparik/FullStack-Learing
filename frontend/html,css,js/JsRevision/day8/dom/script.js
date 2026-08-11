document.body.style.width = "100vw";
document.body.style.height = "100vh";
//document.body.style.backgroundColor = "lightgrey";

let colorchange = ()=>{
  setTimeout(() => {
    document.body.style.backgroundColor = "lightblue";
  }, 2000);
}
//colorchange();
let head=document.getElementById('head')
head.innerHTML='DOM Manipulation with JS'
head.style.textAlign="center"
// head.style.backgroundColor='green'
head.classList.add('bgpurple')

//querySelector returns the first matching element
//querySelector can use any css selector also elemets 
let demo = document.querySelector('.demo')

demo.style.backgroundColor="yellow"

//querySelectorAll returs a nodelist 
let items=document.querySelectorAll('.item')

//console.log(items);

document.querySelector('p').style.backgroundColor="orange"

// document.querySelector('.btn').addEventListener('click',()=>{
//   console.log("Button clicked");
// })
document.querySelector('.btn').addEventListener('click',()=>{
  document.body.classList.toggle('bgyellowmode')  
})


