var  n = 600851475143;
var  i = Math.floor(Math.sqrt(n));
while(i!=0){
  if(n%i ==0){
    //factored
    //check for prime
    var prime = true;
    console.log(i);
    for(var j = 2;j<Math.ceil(Math.sqrt(i));j++){
      if(i%j==0){
      prime = false;
      break;
      }
        
    }
    if(prime == true){
      console.log(i);
      process.exit();
    }
  }

i--;

}
