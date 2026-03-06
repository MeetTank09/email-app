function saveEmail() {
  const email = document.getElementById("emailInput").value;

  if (email === "") {
    alert("Please enter an email for version 2");
    return;
  }

  fetch("/save-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    document.getElementById("emailInput").value = "";
  });
}

function showEmails() {
  fetch("/get-emails")
    .then(res => res.json())
    .then(emails => {
      const list = document.getElementById("emailList");
      list.innerHTML = "";

      emails.forEach(email => {
        const li = document.createElement("li");
        li.textContent = email;
        list.appendChild(li);
      });
    });
}
