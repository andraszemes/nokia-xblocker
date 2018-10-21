<?php
require('mysql_connector.php');
$fid = $_POST['fid'];
$sql = "DELETE FROM filters WHERE id = '".$fid."'";
$result = $conn->query($sql);
$sql = "DELETE FROM filtertochild WHERE filter_id = '".$fid."'";
$result = $conn->query($sql);
$conn->close();
header('Location: /xblocker/pages/filters.php');
 ?>
