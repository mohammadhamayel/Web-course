<?php
$servername = "localhost";
$username = "c35_alquds";
$password = "*1mohammad1*";
$dbname = "c35_alquds";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

echo "Connected successfully";

$conn->close();

?>