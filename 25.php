<?php
$a=1;
$b=2;
$num=3;
while(true){
	$num++;
	$t = $b;
	$b= gmp_add($a,$b);
	$a = $t;
	$bstr = gmp_strval($b);
	if(strlen($bstr)==1000)
	{
		echo $num;
		exit;
	}
}