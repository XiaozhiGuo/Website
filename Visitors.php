<?php
/**
 * Created by PhpStorm.
 * User: Dell
 * Date: 2016/6/1
 * Time: 23:33
 */
if(file_exists('counter.txt')){
    $c = file_get_contents('counter.txt');
    $f = fopen('counter.txt', 'w');
    fwrite($f, $c + 1);
    echo '累计访问量：'.($c + 1);
}else{
    $f = fopen('counter.txt', 'a+');
    fwrite($f, '1');
    echo '累计访问量：1';
}
fclose($f);
