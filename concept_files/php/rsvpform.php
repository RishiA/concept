<?php 
$errors = '';
$myemail = 'hello@mugdharishi.wedding';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   !isset($_POST['guest']))
{
    $errors .= "\n Error: Please fill in the fields";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$guest = $_POST['guest'];
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
  $to = $myemail; 
  $email_subject = "RSVP to wedding from: $name";
  $email_body = "You have received a new message. ".
  " Here are the details:\n \n Name: $name \n Email: $email_address \n No. of Guests: $guest \n Message: \n $message"; 
  
  $headers = "From: $myemail\n"; 
  $headers .= "Reply-To: $email_address";
  
  mail($to,$email_subject,$email_body,$headers);
  //redirect to the 'thank you' page
  header('Location: thank-you.html');
} 
?>
<!DOCTYPE HTML> 
<html>
<head>
  <title>Contact form errors</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>