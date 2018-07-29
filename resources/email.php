<?php
if(isset($_POST['orgname']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone'])){
$org_name = $_POST['orgname'];
$org_type = $_POST['orgtype'];
$name = $_POST['name'];
$email = $_POST["email"];
$participants = $_POST['participants'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$date = $_POST['date'];
$message = $_POST['message'];

$to = "info@revivefirstaid.com";
$subject = "New Course Booking";
$body= '<html>
            <body>
            <h2>New Booking Request From '.$org_name." - ". $name .'</h2>
            <br/>
            <p><strong>Organization Name:</strong>'.$org_name.'</p>
            <p><strong>Organization Type:</strong> '.$org_type.'</p>
            <p><strong>Contact Name:</strong> '.$name.'</p>
            <p><strong>Contact Email:</strong> '.$email.'</p>
            <p><strong>Contact Number:</strong> '.$phone.'</p>
            <p><strong>Course Name:</strong> '.$course.'</p>
            <p><strong>Participants:</strong> '.$participants.'</p>
            <p><strong>Message:</strong></p>
            <p>'.$message.'</p>
            </body>
        </html>';
//headers

$headers = "From: ".$name." <".$email.">\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "MINE-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset-utf-8";
//send
$send = mail($to, $subject, $body, $headers); 
}
?>