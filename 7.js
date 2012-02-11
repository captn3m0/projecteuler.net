var a = new Array(1000000);
var c = 1;//for already passed 2
for(var i=3;i<1000000;i=i+2){
 if(a[i] == undefined){
   c++;
   console.log(c+"    :   "+i);
   if(c>10002)
     process.exit();
 }
 else{
   var j=2;
   while(j*i<1000000){
     a[j*i] = 0;//not prime
     j++;
   }
 }
}

