<?php
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
$flgSend = mail("sakda_jan@hotmail.com","Nice to Meet You",$msg);

if($flgSend){
	echo "Email Sending.";
}
else{
	echo "Email Can Not Send.";
}
?>

