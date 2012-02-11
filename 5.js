var l = new Array(10);;
for(j=0;j<10;j++)
  l[j]=0;
for(var i=1;i<=10;i++){
  //factorize this number i
  //and note its factors
  for(var k = 1;k<i;k++){
    if(i%k==0)
      l[k-1] ++;
  }
}
for(j=0;j<10;j++){
  var s=j+1;
  console.log(s+" "+l[j]);
}
