var sq_of_sum = 5050*5050;
var sum_of_sq = 0;
for(var i=1;i<=100;i++){
  sum_of_sq+=i*i;
}
console.log(sq_of_sum - sum_of_sq);
