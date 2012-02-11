var n=0;
for(var i=999;i>=100;i--){
  for(var j=999;j>=100;j--){
    n = i*j;
    if(Math.floor(n/100000) == 9 && n%10 == 9){
      var s = n.toString();
      if(s.charAt(0) == s.charAt(5) && (s.charAt(1) == s.charAt(4)) && (s.charAt(2) == s.charAt(3)))
       console.log(s);  
      
    }
  }
}
