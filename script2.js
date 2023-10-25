const url = 'https://api.validations.truora.com/v1/validations';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiIiwiYWRkaXRpb25hbF9kYXRhIjoie30iLCJjbGllbnRfaWQiOiJUQ0kzY2EzNDFjNGQ5Njc2MDQ2ZjI2ZDFmOGJkMDQyMDBjNyIsImV4cCI6MzI3MzU4ODMwNCwiZ3JhbnQiOiIiLCJpYXQiOjE2OTY3ODgzMDQsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0xXzZRcXBPblF2NyIsImp0aSI6IjM0ZTRhYjc3LTQxYjMtNDIxMy04N2Q4LWZhMDI5M2FmOGQyYSIsImtleV9uYW1lIjoicHJ1ZWJhX3RlY25pY2FfaGFtYWwiLCJrZXlfdHlwZSI6ImJhY2tlbmQiLCJ1c2VybmFtZSI6InRydW9yYW5hb3MtcHJ1ZWJhX3RlY25pY2FfaGFtYWwifQ.gpyfPT-DprI3s3Fah7--46sr-ZkGWduJx3L_b9zmWA4';

const requestData = {
  type: 'document-validation',
  country: 'CO',
  document_type: 'national-id',
  user_authorized: true,
  account_id: 123
};

// Función para convertir los datos en una cadena URL codificada
function encodeFormData(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Truora-API-Key': apiKey
};

const validationResult = document.getElementById('validation-result');

document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: encodeFormData(requestData)
    })
      .then(response => response.json())
      .then(data => {
        // Mostrar el resultado en la página
        validationResult.textContent = JSON.stringify(data, null, 2);
      })
      .catch(err => {
        console.error(err);
        validationResult.textContent = 'Error en la solicitud.';
      });
});
