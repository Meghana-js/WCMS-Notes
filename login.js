function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "wcms" && pass === "wcms123") {
        // Redirect to home.html
        window.location.href = "home.html";
    } else {
        // Show error message
        document.getElementById("error").innerHTML = "Invalid Username or Password";
    }
}
