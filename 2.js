a=1,b=2,sum=0;
while(b<4000000){
if(b%2 == 0)
 sum+=b;
t = b;
b += a;
a = t;
}
console.log(sum);
