<?php

$from = '';
$sendTo = 'josep@demeq.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'email' => 'Email', 'subject' => 'Subject', 'message' => 'Message');

$okMessage = 'Thank you for your message. I will write back soon.';
$errorMessage = 'There is an error while sending message. Please try again later.';

try {if (!empty($_POST)) {
    $emailText = "You have a new message from your contact form\n=====\n";
    foreach ($_POST as $key => $value) {
       if (isset($fields[$key])) {
         $emailText .= "$fields[$key]: $value\n";
       }
    }
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
 'From: ' . $from,
 'Reply-To: ' . $from,
 'Return-Path: ' . $from,
    );
    mail($sendTo, $subject, $emailText, implode("\n", $headers));
    $responseArray = array('type' => 'success', 'message' => $okMessage);
    }
}
catch (\Exception $e) {
  $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
}
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
 $encoded = json_encode($responseArray);
 header('Content-Type: application/json');
 echo $encoded;
} else {
echo $responseArray['message'];
}


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <script>
    $(function () {
  $('#contact-form').on('submit', function (e) {
   if (!e.isDefaultPrevented()) {
    var url = "contact.php";

    $.ajax({
     type: "POST",
     url: url,
     data: $(this).serialize(),
     success: function (data) {
      var messageAlert = 'alert-' + data.type;
      var messageText = data.message;
      var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"> 
<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times; 
</button>' + messageText + '</div>';
       if (messageAlert && messageText) {
       $('#contact-form').find('.messages').html(alertBox);
       $('#contact-form')[0].reset();
      }
     }
    });
    return false;

   }
  })
});
    </script>
</head>
<body>
<div class="container">
 <div class="row">
  <div class="col-xl-8 offset-xl-2">
   <h1>CONTACT FORM</h1><hr>
   <p class="lead">By filling out the contact form; You may have information about us and current news.</p>
   <div id="message"><?php if(isset($success)){ echo $message; } ?></div>
   <form id="contact-form" method="post"  role="form" novalidate="true" action="<?php echo $_SERVER['PHP_SELF']; ?>">
   <div class="messages"></div>
   <div class="controls">
    <div class="row">
     <div class="col-lg-6">
      <div class="form-group">
        <label for="form_name">Full Name *</label>
        <input id="form_name" type="text" name="name" class="form-control" placeholder="Please fill the name field *" required="required" data-error="You must fill the name field">
        <div class="help-block with-errors alert-danger"></div>
       </div>
      </div>
      <div class="col-lg-6"></div>
    </div>
    <div class="row">
     <div class="col-lg-6">
      <div class="form-group">
       <label for="form_email">E-mail *</label>
       <input id="form_email" type="email" name="email" class="form-control" placeholder="Please fill the email field *" required="required" data-error="You must fill the email field">
        <div class="help-block with-errors alert-danger"></div>
       </div>
      </div>
      <div class="col-lg-6"></div>
    </div>
    <div class="row">
     <div class="col-lg-6">
      <div class="form-group">
       <label for="form_subject">Subject *</label>
       <input id="form_subject" type="text" name="subject" class="form-control" placeholder="Please fill the subject field *" required="required" data-error="You must fill the subject field">
        <div class="help-block with-errors alert-danger"></div>
       </div>
      </div>
      <div class="col-lg-6"></div>
      </div>
     <div class="form-group">
      <label for="form_message">Message *</label>
      <textarea id="form_message" name="message" class="form-control" placeholder="Please fill the message field *" rows="4" required="required" data-error="You must fill the message field"></textarea>
       <div class="help-block with-errors alert-danger"></div>
      </div>
      <input type="submit" class="btn btn-success btn-send" value="Submit">
      <p class="text-muted" style="padding-top: 5px;"><strong>*</strong>This field must be fill.</p>
      </div><!-- controls all end -->
     </form><!-- form all end -->
    </div><!-- col-xl-8 offset-xl-2 end -->
   </div><!-- row all end -->
 </div><!-- container all end -->

</body>