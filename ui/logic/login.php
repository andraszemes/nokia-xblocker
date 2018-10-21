<?php
require('mysql_connector.php');

$email = $_POST['email'];
$pwd = md5($_POST['password']);

$sql = "SELECT * FROM `parents` WHERE email ='".$email."' AND password = '".$pwd."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      session_start();
      $_SESSION["login"] = 1;
      $_SESSION["uid"] = $row['id'];
      header('Location: /xblocker/pages/dashboard.php');
    }
} else {
    header('Location: /xblocker/pages/login.php?message=notsuccessful');
}
$conn->close();
?>
