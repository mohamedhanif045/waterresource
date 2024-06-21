let form = document.querySelector("#contactForm");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    postContactData();
});

function postContactData() {
    const objectData = {
        name: name.value, 
        email: email.value,
        phone: phone.value,
        message: message.value
    };

    fetch("http://localhost:3000/contactDatas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
