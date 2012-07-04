sum = (a) -> total = total + a
max = parseInt process.argv[2],10

getDivisors = (n) ->
  (x for x in [1..n/2] when n%x==0)

sum = (a) -> total = total + a

isAbundant=(n,divisors)->
  total=0
  sum = (a) -> total = total + a
  divisors =getDivisors n
  sum x for x in divisors
  true if total>n

abundant = (x for x in [1..max] when isAbundant x)

total=0
sums=[1..max]
for i in abundant
  for j in  abundant.slice(abundant.indexOf(i))
    sums[i+j-1]=0 if i+j<=max

total=0
total+=x  for x in sums
console.log total
