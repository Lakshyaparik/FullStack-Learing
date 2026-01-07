//synchronius
// console.log('a')
// console.log('b')
// console.log('c')
//asynchronius

//console.log('a');
setTimeout(() => {  ///async base //browser timer handle krnta hai
 // console.log('b');
  
}, 3000);
//console.log('c');

//promise
 let p = new Promise((resolve  ,reject)=>{// resolve function , reject function
      //async code
 })

 let promise = new Promise((resolve,reject)=>{
    let success = false;
    if(success){
      resolve('promise resolved successfully');
    }
    else{
      reject('promise rejected');
    }
 })

 promise
  .then((result)=>{
    //console.log(result);
  })
  .catch((error)=>{
   // console.log(error);
  })


function getsubzi(){
  return new Promise((resolve,reject)=>{
       setTimeout(() => {
        resolve('your vegetable request has been completed')
       }, 3000);
  })
}

getsubzi()
.then((data)=>{
  //console.log(data);
  return 'helo'
})
.then((next)=>{
 // console.log(next);
})
.catch((error)=>{
 // console.log(error);
})

//.then is very complex if its goes to far so here async await comes

async function greet() {   //async function always return promise
  return 'hello'
}
//console.log(greet());

function getdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('user data....')
    }, 3000);
  })
}

  
async function mydata() {
  let data = await getdata()
  console.log(data);
}

//mydata()


//big example

function studyData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('your studyData is good in all subject')
    }, 2000);
  })
}


function acdemicData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('your academic is good in all sports')
    }, 2000);
  })
}

let bhehaviour = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('your bhehaviour is good')
  }, 1000);
})

async function getStudentData() {
  try{
  let sd =await studyData()
  //console.log(sd);
  
  let ad= await acdemicData()
  console.log(ad);
  }
catch{(error)=console.log(error);}
        
}
//getStudentData()

Promise.all([studyData(),acdemicData(),bhehaviour])
.then((result)=>{
  //console.log(result);
  
})
//.catch(err=>console.log(err))

async function getData() {
  let result = await Promise.all(
    [
      studyData(),
      acdemicData(),
      bhehaviour
    ]
  )
  .then(result=>console.log(result)
  )
  .catch(err=>console.log(err)
  )
}

//getData()