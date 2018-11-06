(() => {
  const myForm = document.getElementById('myForm')
  const myInput = document.getElementById("myInput")
  const outputDiv = document.getElementById('output')

  myForm.onsubmit = (e) => {
    e.preventDefault() // prevent standard form submit
    handleSubmit()
  }

  function handleSubmit() {
    // clear outputDiv
    outputDiv.innerText = ''

    // send a POST request to the '/api/echo' endpoint
    fetch('/api/echo', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ msg: myInput.value }),
    })
      .then(response => response.json()) // convert response body from ReadableStream to JavaScript object
      .then(json => displayResponse(json))
      .catch(err => window.alert(`There was an error: ${err}`))
  }

  function displayResponse(json) {
    const data = json.data
    outputDiv.innerHTML = `<div>You sent <b>"${data}"</b> to the server</div>`
  }
})()

