<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require  'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require  'vendor/phpmailer/phpmailer/src/SMTP.php';
require  'vendor/phpmailer/phpmailer/src/Exception.php';

$mail = new PHPMailer(true);

try {

    $mail->setFrom('');
    $mail->addAddress('');     // Add a recipient

    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $_POST["subject"];
    $mail->Body    = "New e-mail from: " .$_POST["name"]. " (" .$_POST["email"]. ")<br><br>" .$_POST["content"];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>