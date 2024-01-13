
function logout() {
    localStorage.clear();
    window.location.href = '../../index.html';
}

document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector('.logout');
    
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            logout();
        });
    }
});