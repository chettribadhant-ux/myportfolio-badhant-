document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    alert(response.message);
  })
  .catch(error => console.log(error));
});





const express = require("express");
const app = express();

app.use(express.json());

// 🔥 This line is IMPORTANT
app.use(express.static("frontend"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});




