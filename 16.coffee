_=require('underscore')

sumOfDigits = (x)->
	sum=0
	while(x>1)
		console.log(x)
		console.log(x%10+" += "+sum)
		sum+=parseInt(x%10)
		x=Math.floor(x/10)
	sum

console.log(sumOfDigits(Math.pow(2,1000)))
