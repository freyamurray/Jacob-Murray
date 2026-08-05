<?php

// read in dependencies
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;

if ($_SERVER['REQUEST_METHOD'] == "POST") { // validate form method

    // declare superglobal variables
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["number"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    //validate form inputs 

    if (empty($name || $email || $subject || $message)) {
        echo "Error: please fill out all required fields";
        exit();
    }

    // configure SMTP
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->Username = 'PLACEHOLDER';
    $mail->Password = 'PLACEHOLDER';

    // email details 
    $mail->setFrom($email, $name); // the person who filled in the form
    $mail->addReplyTo($email, $name); // as above
    $mail->addAddress("PLACEHOLDER", "PLACEHOLDER"); // where the email should get sent to
    $mail->Subject = $subject;
    $mail->Body = $message;

    // on form submission 
    try {
        $mail->send();
        header("Location: sent.html");
    } catch (Exception $e) {
        echo "Mailer error: " . $mail->ErrorInfo;
    }

} else {
    exit();
}
