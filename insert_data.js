function insertData(header,value){
    // Insert the new Registration ID into the "Registration ID" column
  var regIdColumnIndex = headers.indexOf(header) + 1;

  // Check if "Registration ID" header exists
  if (regIdColumnIndex > 0) {
    // Update the value in the last row
    sheet.getRange(lastRow, regIdColumnIndex).setValue(value);
  } else {
    Logger.log("Header:"+header+" not found in the sheet.");
  }
}
