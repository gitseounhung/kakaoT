var async1 = function(param, callback){
    shicdalsoo(param*2);
  }
  var start = 1;
  async1(start, (result) =>{
    console.log(result);
  });
  var async2 = function(param, callback){
    shicdalsoo(param*2);
  }
  var start = 1;
  async1(start, (result) =>{
    async2(result, (result)=>{
      console.log(result);
  
    })
  });
  var async3 = function(param, callback){
    shicdalsoo(param*2);
  };
  var start = 1;
  async1(start, (result) =>{
    async2(result, (result)=>{
      async3(result, (result)=>{
        console.log(result);
      });
    });
  });