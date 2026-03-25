<?php
include "db.php";

$keyword=$_GET['keyword'];

$sql="SELECT * FROM students
WHERE name LIKE '%$keyword%'";

$result=mysqli_query($conn,$sql);

while($row=mysqli_fetch_assoc($result)){

echo $row['name']." - ".$row['email']." - ".$row['mobile']."<br>";

}

?>