<?php include "db.php"; ?>

<!DOCTYPE html>
<html>
<head>
<title>PHP CRUD App</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h2>Student Management</h2>

<form action="insert.php" method="POST">

<input type="text" name="name" placeholder="Name" required>
<input type="email" name="email" placeholder="Email" required>
<input type="text" name="mobile" placeholder="Mobile" required>

<button type="submit">Insert</button>

</form>

<h3>Search Student</h3>

<form action="search.php" method="GET">
<input type="text" name="keyword" placeholder="Enter name">
<button type="submit">Search</button>
</form>

</body>
</html>