<?php
include "db.php";

$id=$_POST['id'];
$name=$_POST['name'];
$email=$_POST['email'];
$mobile=$_POST['mobile'];

$sql="UPDATE students
SET name='$name',email='$email',mobile='$mobile'
WHERE id=$id";

mysqli_query($conn,$sql);

header("Location:index.php");

?>