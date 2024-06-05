function async1(param){
    return promise.reslove(param*2)
  }
  function async2(param){
    return promise.reslove(param*2)
  }
  function async3(param){
    return promise.reslove(param*2)
  }
  
  var start =1;
  async1(start)
    .then(async2)
    .then(async3)
    .then((result)=>{
      console.log(result);
    })