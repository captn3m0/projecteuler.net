for(var i=1;i<1000;i++)
  for(var j=1;j<1000;j++)
   {
     var k= 1000-i-j;
     if(i*i+j*j == k*k)
       console.log(i*j*k);
   }
