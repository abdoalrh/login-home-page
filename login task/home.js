window.onload = function () {
    const loggedIn = localStorage.getItem('loggedIn');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const logoutButton = document.getElementById('logoutButton');

    if (loggedIn !== 'true') {

        window.location.href = 'login.html';
    } else {
        const username = localStorage.getItem('username');
        welcomeMessage.textContent = `Welcome, ${username}!`;
    }

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    });
};
