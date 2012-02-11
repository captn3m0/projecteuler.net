<?php
$fifths = array();
for($i=0;$i<10;$i++)
	$fifths[$i]=pow(($i),5);
$totalSum=0;
for($i=2;$i<250000;$i++)
{
	$localsum = 0;
	for($j=0;$j<strlen($i);$j++)
	{
		$localsum+=$fifths[substr($i,$j,1)];
	}
	if($localsum==$i)
	{
		echo $i."\n";
		$totalSum+=$localsum;
	}
	
}
echo $totalSum;
