<?php
 
if(isset($_POST['submit'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "hello@mugdharishi.wedding";
 
    $email_subject = "RSVP for Mugdha & Rishi's wedding";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "Sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['sendername']) ||
 
        !isset($_POST['senderemail']) ||
 
        !isset($_POST['senderguests']) ||

        !isset($_POST['sendermessage'])) {
 
        died('Sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $name = $_POST['sendername']; // required
 
    $email = $_POST['senderemail']; // required
 
    $guest = $_POST['senderguests']; // required    
    
    $message = $_POST['sendermessage']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
 
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
 
  }
 
 
  if(strlen($message) < 2) {
 
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
 
    $email_message .= "Email: ".clean_string($email)."\n";

    $email_message .= "No. of Guests: ".clean_string($guest)."\n";
 
    $email_message .= "Message: ".clean_string($message)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email."\r\n".
 
'Reply-To: '.$email."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 <!DOCTYPE html>
 <html>
 <head>
   <title>Thanks</title>
  <meta http-equiv="refresh" content="10; url=http://mugdharishi.wedding/" />
 </head>
 <body>
 <h2> Thanks for RSVP-ing! We are excited to see you. </h2>
 </body>
 </html>
 

 
 
 
<?php
 
}
 
?>