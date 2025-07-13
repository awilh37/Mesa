// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQL5d9gQZLe1JSAgaVpNvZgQMG12TrjK0",
  authDomain: "mesa-790e3.firebaseapp.com",
  projectId: "mesa-790e3",
  storageBucket: "mesa-790e3.firebasestorage.app",
  messagingSenderId: "893678679644",
  appId: "1:893678679644:web:207423bf4ab9dfddb7d899",
  measurementId: "G-GNKN42JVC6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginButton = document.getElementById('login-with-google');
if (loginButton) {
    loginButton.addEventListener('click', () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                window.location.href = 'index.html';
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error(error);
            });
    });
}

export function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.href = 'login.html';
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
}
