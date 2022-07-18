function validate() {
    let namee = document.querySelector("#name");
    let emaill = document.querySelector("#email");
    let phonee = document.querySelector("#phone");
    let companyy = document.querySelector("#company");
    let msg = document.querySelector("#message");
    let btn = document.querySelector("#submit");
    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (namee.value == "" || emaill.value == "" || msg.value == "") {
                alert("fields are required")
            } else {
                sendmail(namee.value, emaill.value, phonee.value, companyy.value, msg.value);
                namee.value= emaill.value= phonee.value= companyy.value= msg.value=""
            }
        });
    }
}
validate();

function sendmail(namee, emaill, phonee, companyy, msg) {
    emailjs.send("service_9vljbah", "template_8622e7i", {
        name: namee,
        email: emaill,
        phone: phonee,
        company: companyy,
        message: msg,
    });
}