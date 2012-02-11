function numberOfDivisors(n){
  var c=2;//2for 1 and n
  for(var i=2;i<n;i++)
    if(n%i==0)
      c++;
  return c;
}

function tr(i){ 
  var j=i++;
  return (i*j)/2;
}
var x= process.argv[2];
console.log('triangle number is'+tr(x));
console.log(numberOfDivisors(tr(x)));
