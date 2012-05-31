var _=require('underscore');
function numTerms(i){
	var terms = 1;
	while(i!=1){
		if(i%2)
			i=3*i+1
		else
			i=i/2
		terms++;
	}
	return terms;
}
var maxTerms = start=0;
for(i = 2;i<1000000;i++){
	var num = numTerms(i)
	if(num>maxTerms){
		start=i
		maxTerms = num
	}
}
console.log(start);
