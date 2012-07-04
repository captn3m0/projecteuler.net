<?php
$tr = file("18.txt");

$tr=array_map(function($line){
	return explode(" ",$line);
},$tr);

function process_tree(&$tr,$row,$column){
	if($row>=count($tr)||$column>$row+1)
		return 0;
	do{
		$left =$tr[$row][$column] + process_tree($tr,$row+1,$column);
		$right=$tr[$row][$column] + process_tree($tr,$row+1,$column+1);
		return max($left,$right);
	}while(++$row<count($tr));
	return 0;
}
echo process_tree($tr,0,0);
