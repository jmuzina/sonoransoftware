<?php
require "PHPMailer/PHPMailerAutoload.php";
function smtpmailer($to, $from, $from_name, $subject, $body)
    {
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPAuth = true; 
 
        $mail->SMTPSecure = 'ssl'; 
        $mail->Host = 'smtp.zoho.com';
        $mail->Port = 465;  
        $mail->Username = 'account@sonoransoftware.com';
        $mail->Password = '';
   
        $mail->IsHTML(true);
        $mail->From="account@sonoransoftware.com";
        $mail->FromName=$from_name;
        $mail->Sender=$from;
        $mail->AddReplyTo($from, $from_name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($to);
        if(!$mail->Send())
        {
            $error ="Please try Later, Error Occured while Processing...";
            return $error; 
        }
        else 
        {
            header("Location: https://sonoransoftware.com/");
        }
    }
    
    $to   = 'info@sonoransoftware.com';
    $from = $_POST['from'];
    $name = $_POST['name'];
    $subj = $_POST['subject'];
    $message = $_POST['message'];
    $text = 'You have received an email from '.$name." ( ".$from." ): ".$message;
    
    $error=smtpmailer($to, $from, $name , $subj, $text);
    
?>

<html>
    <head>
        <title>:)</title>
    </head>
    <body style="background: black;">
        <center><h2 style="padding-top:70px;color: white;"><?php echo $error; ?></h2></center>
    </body>
    
</html>