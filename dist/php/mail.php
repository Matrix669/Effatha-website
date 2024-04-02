<?php

$name = $_POST["name"]; 
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie Effatha";
$to = "maks.tk95@gmail.com";
$message = $_POST["message"]; 

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /Effatha-website/podstrony/kontakt/index.html?mail_status=sent");
} else {
    header("Location: /Effatha-website/podstrony/kontakt/index.html?mail_status=error");
}