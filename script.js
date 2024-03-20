function send() {
  let requestOptions = {
      method: 'POST', // Set the method explicitly
      headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
      }
  };

  let requestBody = {
      "resDeatils": {
          "user": document.getElementById('resUser').value.trim(),
          "password": document.getElementById('resPassword').value.trim(),
          "id": parseInt(document.getElementById('resId').value.trim(), 10)
      },
      "customerDetails": {
          "firstName": document.getElementById('firstName').value.trim(),
          "lastName": document.getElementById('lastName').value.trim(),
          "phoneNumber": document.getElementById('phoneNumber').value.trim(),
          "email": document.getElementById('email').value.trim()
      },
      "orderDetails": {
          "externalOrderId": document.getElementById('externalOrderId').value.trim(),
          "website": document.getElementById('website').value.trim()
      }
  };

  requestOptions.body = JSON.stringify(requestBody);

  fetch("https://584343a167a74238b6e49d10ec8d84f9.flow.pstmn.io", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error('error:', error));
}
