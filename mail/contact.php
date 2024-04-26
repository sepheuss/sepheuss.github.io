<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set your email address where you want to receive the form submissions
    $to = "sepheusfantaye@gmail.com";

    // Set the email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Build the email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message:\n$message";

    // Set headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Mail sent successfully";
    } else {
        echo "Error sending mail";
        error_log(error_get_last()['message']);
    }
}
?>
