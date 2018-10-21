<?php
require('mysql_connector.php');

$name = $_POST['name'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];
$chuid = $_POST['chuid'];

$sql = "UPDATE children SET name = '".$name."', phone = '".$phone."', birthday = '".$birthday."' WHERE id = '".$chuid."'";
$result = $conn->query($sql);
$conn->close();

header('Location: /xblocker/pages/dashboard.php');
?>
