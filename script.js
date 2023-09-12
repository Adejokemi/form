document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');


    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        
        if (localStorage.getItem(username)) {
            message.textContent = 'Username already exists. Please use a different one.';
            return;
        }
        
        localStorage.setItem(username, password);
        message.textContent = 'Successful. You can now login.';
        signupForm.reset();
    });

    
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        
        if (localStorage.getItem(username) === password) {
            message.textContent = 'Login successful. Welcome, ' + username + '!';
        } else {
            message.textContent = 'Invalid username or password.';
        }
        loginForm.reset();
    });
});
