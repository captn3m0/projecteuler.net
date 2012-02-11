var num=2520;
while(num+=20){
	//Check divisibility with all
	var divisibility=true;
	for(i=19;i>2;i--){
		if(num%i!=0){
			//console.log(num+" : "+i);
			divisibility=false;
			break;
		}
	}
	if(divisibility){
		console.log(num);
		process.exit(0);
	}
}
