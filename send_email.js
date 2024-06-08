function sendMail(name,course,email,reg_id,upiID,paymentFormLink){
  

  // Message in HTML
 var message = "Dear " + name + ",<br><br>" + 
              "Congratulations! You have successfully initiated the registration for the internship on <b>" + course + "</b>. Your registration ID is: <b>" + reg_id + "</b>.<br><br>" +
              upiID +"<br><br>"+
              "After making the payment, please upload the payment screenshot using this form: <a href='" + paymentFormLink + "'>Click here</a> and include your registration ID.<br><br>" +
              "We look forward to seeing you there! For any issues, please contact us at +91 88912 12539.<br><br>" +
              "Best regards,<br>" +
              "Team Phiscape";  
  // Logger.log(message)

  // Send Email 
  MailApp.sendEmail({
    name: "Team Phiscape", //optional
    to: email,
    subject: "Internship Registration successful",
    htmlBody: message,    
  });

  Logger.log('Mail sent to: '+email);
}
