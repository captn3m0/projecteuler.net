var _=require('underscore');
function numberOfDivisors(n){
  var a= [];
  var c=2;//2for 1 and n
  for(var i=2;i<Math.sqrt(n)+1;i++)
    if(n%i==0){
		a.push(i);
		a.push(n/i);
	}
  return c+_.unique(a).length;
}

//Return the ith triangle number
function tr(i){
  return (i*++i)/2;
}

for(n=1;;n++){
	var nthTriangleNumber = tr(n);
	var div = numberOfDivisors(nthTriangleNumber);
	if(div >500){
		console.log(nthTriangleNumber);
		break;
	}
}
