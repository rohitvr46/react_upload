<?php
// Get data from form  
$name = $_POST['fullname'];
$email = $_POST['email'];
$comp = $_POST['company'];
$number = $_POST['phone'];
$message = $_POST['subject'];
$selectedOption = $_POST['select_option']; // Assuming 'select_option' is the name attribute of the <select> element
$checkboxValue = isset($_POST['checkbox']) ? $_POST['checkbox'] : 'false'; // Assuming 'checkbox' is the name attribute of the checkbox

$to = "rohitvr190204@gmail.com";
$subject = "New Contact Form";
$txt = "Name = " . $name . "\r\n  Email = " . $email . "\r\n Company = " . $comp . "\r\n Phone = " . $number . "\r\n Message =" . $message . "\r\n Selected Option = " . $selectedOption . "\r\n Checkbox Value = " . $checkboxValue;
$headers = "From: noreply@yoursite.com" . "\r\n" . "CC: somebodyelse@example.com";

if ($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

// Redirect
header("Location:thankyou.html");
?>
