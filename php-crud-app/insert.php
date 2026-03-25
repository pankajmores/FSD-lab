<?php
include "db.php";

$name=$_POST['name'];
$email=$_POST['email'];
$mobile=$_POST['mobile'];

$sql="INSERT INTO students(name,email,mobile)
VALUES('$name','$email','$mobile')";

mysqli_query($conn,$sql);

header("Location:index.php");

?>