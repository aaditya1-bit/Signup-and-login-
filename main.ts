interface User {
    email: string;
    username: string;
    password: string;
}

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById('signup-form') as HTMLFormElement;
    const loginForm = document.getElementById('login-form') as HTMLFormElement;

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            handleSignup();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            handleLogin();
        }); 
    }

    function handleSignup() {
        const emailElement = document.getElementById('signup-email') as HTMLInputElement;
        const usernameElement = document.getElementById('signup-username') as HTMLInputElement;
        const passwordElement = document.getElementById('signup-password') as HTMLInputElement;

        if (emailElement && usernameElement && passwordElement) {
            const email = emailElement.value;
            const username = usernameElement.value;
            const password = passwordElement.value;

            if (email && username && password) {
                if (validateEmail(email)) {
                    const user: User = { email, username, password };
                    localStorage.setItem(username, JSON.stringify(user));
                    console.log(`Stored: ${localStorage.getItem(username)}`);
                    console.log(`Stored: ${localStorage.getItem(email)}`);
                    alert('Signup successful!');
                } else {
                    alert('Invalid email format.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        }
    }

    function handleLogin() {
        const usernameElement = document.getElementById('login-username') as HTMLInputElement;
        const passwordElement = document.getElementById('login-password') as HTMLInputElement;

        if (usernameElement && passwordElement) {
            const username = usernameElement.value;
            const password = passwordElement.value;

            if ( username && password) {
                const storedUser = localStorage.getItem(username);

                if (storedUser) {
                    const user: User = JSON.parse(storedUser);
                    console.log(`Retrieved: ${storedUser}`);

                    if (user.password === password) {
                        alert('Login successful!');
                    } else {
                        alert('Invalid password.');
                    }
                } else {
                    alert('User not found.');
                }
            } else {
                alert('Please fill in both fields.');
            }
        }
    }

    function validateEmail(email: string): boolean {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
