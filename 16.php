<?php
$num =  gmp_strval(gmp_pow(2,1000));
$sum=0;
for($i=0;$i<strlen($num);$i++)
	$sum+=$factorial[$i];
echo $sum;
