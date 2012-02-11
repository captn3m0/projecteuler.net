<?php
$factorial =  gmp_strval(gmp_fact(100));
$sum=0;
for($i=0;$i<strlen($factorial);$i++)
	$sum+=$factorial[$i];
echo $sum;

