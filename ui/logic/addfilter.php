<?php
require('mysql_connector.php');
session_start();
$puid = $_SESSION['uid'];
$name = $_POST['name'];
$phone = $_POST['phone'];

$sql = "INSERT INTO filters (name, phone, parent_id) VALUES ('".$name."', '".$phone."', '".$puid."')";
$result = $conn->query($sql);
$conn->close();
header('Location: /xblocker/pages/filters.php');
 ?>
