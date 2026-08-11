fetch('https://jsonplaceholder.typicode.com/todos/1') //fetch alaways return promise
.then(response=>response.json())
//.then(data=>console.log(data))
//.catch(err=>console.log(err))

async function getUsers() {

  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await response.json()  //.json()  also return promise of contverting data into json th's why we write await
  console.log(data);
}

//getUsers()

//fetch with try catch

async function users() {

  try{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (!response.ok)
    {
      throw new Error('server error')
    }
    else{
    let data = await response.json()
    console.log(data);
    }
  }
  catch(error){
    console.log(error);
    
  }
}
//users()

async function loaddata() {
  let [d1,d2] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json())
  ])
  console.log(d1,d2);
  
}
loaddata()