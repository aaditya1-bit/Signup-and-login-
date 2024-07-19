document.addEventListener("DOMContentLoaded", function () {
    var signupForm = document.getElementById('signup-form');
    var loginForm = document.getElementById('login-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            handleSignup();
        });
    }
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            handleLogin();
        });
    }
    function handleSignup() {
        var emailElement = document.getElementById('signup-email');
        var usernameElement = document.getElementById('signup-username');
        var passwordElement = document.getElementById('signup-password');
        if (emailElement && usernameElement && passwordElement) {
            var email = emailElement.value;
            var username = usernameElement.value;
            var password = passwordElement.value;
            if (email && username && password) {
                if (validateEmail(email)) {
                    var user = { email: email, username: username, password: password };
                    localStorage.setItem(username, JSON.stringify(user));
                    console.log("Stored: ".concat(localStorage.getItem(username)));
                    console.log("Stored: ".concat(localStorage.getItem(email)));
                    alert('Signup successful!');
                }
                else {
                    alert('Invalid email format.');
                }
            }
            else {
                alert('Please fill in all fields.');
            }
        }
    }
    function handleLogin() {
        var usernameElement = document.getElementById('login-username');
        var passwordElement = document.getElementById('login-password');
        if (usernameElement && passwordElement) {
            var username = usernameElement.value;
            var password = passwordElement.value;
            if (username && password) {
                var storedUser = localStorage.getItem(username);
                if (storedUser) {
                    var user = JSON.parse(storedUser);
                    console.log("Retrieved: ".concat(storedUser));
                    if (user.password === password) {
                        alert('Login successful!');
                    }
                    else {
                        alert('Invalid password.');
                    }
                }
                else {
                    alert('User not found.');
                }
            }
            else {
                alert('Please fill in both fields.');
            }
        }
    }
    function validateEmail(email) {
        var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
