<?php
$files  = (glob('todayImage/*.{jpg,png,JPG}',GLOB_BRACE));
$arr = array();
foreach($files as $item )
   array_push($arr,$item);
echo json_encode($arr);

