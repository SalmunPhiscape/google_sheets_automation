function sendMail(name,course,email,reg_id,upiID,paymentFormLink){
  

  // Message in HTML
 var message = "Dear " + name + ",<br><br>" + 
              "Congratulations! You have successfully initiated the registration for the internship on <b>" + course + "</b>. Your registration ID is: <b>" + reg_id + "</b>.<br><br>" +
              "To complete the registration process, please make the payment through one of the following methods:<br><br>" + 
              "<b>1. Account Transfer:</b><br><br>" +
              "Account No: 67130065019<br>" +
              "IFSC: SBIN0070870<br>" +
              "Dept of Electrical & Electronics Engineering, TKMCE<br>" +
              "Karicode Branch<br><br>" +
              "<b>2. UPI Transfer</b>: <br><br>" +
              upiID +"<br><br>"+
              "After making the payment, please upload the payment screenshot using this form: <a href='" + paymentFormLink + "'>Click here</a> and include your registration ID.<br><br>" +
              "We look forward to seeing you there! For any issues, please contact us at +91 88912 12539.<br><br>" +
              "Best regards,<br>" +
              "Team Phiscape";  
  // Logger.log(message)

  // Send Email 
  MailApp.sendEmail({
    name: "Team Phiscape",
    to: email,
    subject: "Internship Registration successful",
    htmlBody: message,    
  });

  Logger.log('Mail sent to: '+email);
}
