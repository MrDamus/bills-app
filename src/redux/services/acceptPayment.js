const SERVER_URL = 'http://localhost:3000/'

function acceptPayment(type. value, name ) {
  return fetch(`${SERVER_URL}`, {
    method: 'POST',
    body: JSON.stringify(payment),
    headers: {
      'content-type': 'application/json',
    },
})
.then(data => data.json())
}

export default {
  acceptPayment
}
