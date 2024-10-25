var form = document.getElementById("my-form");
  
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Obrigado! Mensagens enviada com sucesso. Agurade nosso retorno.";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! Algo de errado não esta certo... Tente novamente mais tarde"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! Algo de errado não esta certo... Tente novamente mais tarde"
  });
}
form.addEventListener("submit", handleSubmit)