<?php
$numbers = file("13.txt");
$sum=0;
foreach($numbers as $n)
	$sum=gmp_add($sum,$n);
echo gmp_strval($sum);
