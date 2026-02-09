function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    let valid = true;

    // Clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    // Mobile number validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter valid 10-digit mobile number";
        valid = false;
    }

    return valid;
}
