document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
    const userWelcome = document.getElementById('userWelcome');
    const dashboard = document.getElementById('dashboard');
    const signupContainer = document.getElementById('signup');
    const signinContainer = document.getElementById('signin');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        alert('Signup successful!');
        showSignin();
    });

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            userWelcome.textContent = user.username;
            showDashboard();
        } else {
            alert('Invalid email or password');
        }
    });

    const showSignup = () => {
        signinContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    };

    const showSignin = () => {
        signupContainer.style.display = 'none';
        signinContainer.style.display = 'block';
    };

    const showDashboard = () => {
        signupContainer.style.display = 'none';
        signinContainer.style.display = 'none';
        dashboard.style.display = 'block';
    };

    const logout = () => {
        dashboard.style.display = 'none';
        showSignin();
    };

    window.showSignup = showSignup;
    window.showSignin = showSignin;
    window.logout = logout;
});
