import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { logout } from './firebase.js';

const headerContainer = document.getElementById('global-header');

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const header = `
            <header>
                <div class="logo">
                    <a href="gamehub.html">Mesa</a>
                </div>
                <div class="profile">
                    <img src="${user.photoURL}" alt="Profile Picture" class="profile-pic">
                    <span>${user.displayName}</span>
                    <div class="dropdown-content">
                        <a href="#">View Account</a>
                        <a href="settings.html">Settings</a>
                        <button id="logout-button">Sign Out</button>
                    </div>
                </div>
            </header>
        `;
        headerContainer.innerHTML = header;

        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', logout);
        }
    } else {
        // User is signed out
        headerContainer.innerHTML = '';
    }
});
