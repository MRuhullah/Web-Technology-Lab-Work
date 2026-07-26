let form = document.getElementById("form") 
form.addEventListener("submit", validateform)

function validateform(event) {
    event.preventDefault()

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name == "") {
        alert("Name cannot be empty");
        return;
    }

    let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 

    //  to check one uppercase, special character n number in password:    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailpattern.test(email)) {

        alert("Please enter a valid email address");
        return;
    }
    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }

    let phonepattern = /^[0-9]{10}$/

    if (!phonepattern.test(phone)) {

        alert("Phone number must contain exactly 10 digits");
        return;
    }

    alert("Form Submitted Successfully");
    form.submit()
}
