<?php
require('mysql_connector.php');

session_start();

$name = $_POST['name'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];
$puid = $_SESSION['uid'];

$sql = "INSERT INTO children (name, phone, parent_id, birthday) VALUES ('".$name."', '".$phone."', '".$puid."', '".$birthday."')";
$result = $conn->query($sql);
$chuid = $conn->insert_id;

if(isset($_POST["filters"])) {
  foreach ($_POST["filters"] as $x) {
    $sql = "INSERT INTO filtertochild (filter_id, children_id) VALUES ('".$x."', '".$chuid."')";
    $conn->query($sql);
  }
}
header('Location: /xblocker/pages/dashboard.php');
$conn->close();
?>
