function getData() {
  
  var sheet = SpreadsheetApp.getActiveSheet();

  // Get last row
  var lastRow = sheet.getLastRow();

  // Get range with headers
  var range = sheet.getRange(1, 1, lastRow, sheet.getLastColumn());

  // Get all values 
  var rows = range.getValues();

  // Last row is the latest response 
  var response = rows[rows.length - 1];

  // Get header columns
  var headers = rows[0];

  // Create response object
  var resp = {};
  
  // Populate object
  for(var i=0; i<headers.length; i++) {
    resp[headers[i]] = response[i];
  }

  // Get required details
  var email = resp.Email;
  var name = resp["Full Name"];
  // var reg_id = "PA23" + (lastRow + 20);

  console.log(name);
  console.log(email);
}
