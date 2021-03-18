<?php

$name = $_POST['name'];
$email= $_POST['email'];
$message = $_POST['message'];

$emailFrom = 'YNCCC ';
$emailSubject = 'New Form Submission';
$emailBody = 'Sender : '.
$name."\n E-mail :".
$email."\n Message : ".
$message."\n";

$to = 'YNCCCE@gmail.com';
$headers = 'From :'. $emailFrom ."\r\n";
$headers.='Reply-To : '.$email. "\r\n"; 
mail($to,$emailSubject,$emailBody,$headers);
header("Location: index.html");

?>