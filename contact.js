let form = document.querySelector("#contactForm");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    getContactData();
});

function getContactData() {
    const objectData = {
        name: name.value, // Corrected from Name to name
        email: email.value,
        phone: phone.value,
        message: message.value
    };
    
    fetch("http://localhost:3000/contactDatas")
        .then(res => res.json())
        .then(getContactDatas => console.log(objectData));
}
