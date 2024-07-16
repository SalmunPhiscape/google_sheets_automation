function createAndFillDocument(templateId, headers, rowData) {
  // Make a copy of the template
  var template = DriveApp.getFileById(templateId);
  var doc = template.makeCopy().getId();
  var docFile = DocumentApp.openById(doc);
  var body = docFile.getBody();

  // Replace placeholders with actual data
  for (var j = 0; j < headers.length; j++) {
    body.replaceText('{{' + headers[j] + '}}', rowData[j]);
  }

  docFile.saveAndClose();
  return docFile.getId();
}
