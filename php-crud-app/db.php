<?php

$host = "localhost";
$user = "root";
$password = "rootpass";
$database = "lab4_db";

$conn = mysqli_connect($host,$user,$password,$database);

if(!$conn){
    die("Connection Failed");
}

?>