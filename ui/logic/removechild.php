<?php
require('mysql_connector.php');

$chuid = $_POST['chuid'];

$sql = "DELETE FROM children WHERE id = ".$chuid;
$result = $conn->query($sql);

$sql = "DELETE FROM filtertochild WHERE children_id = ".$chuid;
$result = $conn->query($sql);

$conn->close();
header('Location: /xblocker/pages/dashboard.php');
?>
