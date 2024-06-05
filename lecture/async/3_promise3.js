new Promise

function async1(param){
  return new Promise(function(resolve, reject){
    resolve(param *2);
  })
}

  function async2(param){
    return new Promise(function(resolve, reject){
      resolve(param *3);
    })
  }
  function async2(param){
    return new Promise(function(resolve, reject){
      resolve(param *3);
    })
  }

  // promise 체이닝
var start =1;
async1(start)
  .then(async2)
  .then(async3)
  .then((result)=>{
    console.log(result);
  })

