<?php
require('mysql_connector.php');

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = md5($_POST['password']);

$sql = "INSERT INTO parents (name, surname, phone, email, password) VALUES ('".$name."', '".$surname."', '".$phone."', '".$email."', '".$password."')";
$result = $conn->query($sql);
session_start();
$_SESSION['login'] == 1;
header('Location: /xblocker/pages/login.php');
$conn->close();
?>
