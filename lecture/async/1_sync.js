var sync1 = function (param){
    return param * 2;
  };
  var start = 1;
  console.log(sync1(start));
  
  var sync2 = function (param){
    return param * 3;
  };
  var start = 1;
  console.log(sync2(sync1(start)));
  
  var sync3 = function (param){
    return param * 4;
  };
  var start = 1;
  console.log(sync3(sync2(sync1(start))));
  