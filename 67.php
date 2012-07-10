<?php
$triangle = array_reverse(file('67.txt'));

$arr = array();
for($j=0;$j<102;$j++)
    $arr[$j]=0;//initialize entire array with 0

foreach($triangle as $line){
    $numbers = explode(' ',$line);
    $count = count($numbers);
    //we have $count numbers
    //and have to reduce them to 
    //count-1 numbers by pairwise adjacent maximums
    //$arr should have count+1 elements
    for($i=0;$i<$count;$i++){
        $arr[$i]=$numbers[$i]+max($arr[$i],$arr[$i+1]);
    }
}
echo $arr[0];
