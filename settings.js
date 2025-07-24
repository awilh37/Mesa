import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { app } from './firebase.js';

const auth = getAuth(app);
const db = getFirestore(app);

const mainColorInput = document.getElementById('main-color');
const accent1ColorInput = document.getElementById('accent1-color');
const accent2ColorInput = document.getElementById('accent2-color');

function applyColors(colors) {
    document.documentElement.style.setProperty('--main-color', colors.main);
    document.documentElement.style.setProperty('--accent1-color', colors.accent1);
    document.documentElement.style.setProperty('--accent2-color', colors.accent2);
    mainColorInput.value = colors.main;
    accent1ColorInput.value = colors.accent1;
    accent2ColorInput.value = colors.accent2;
}

async function saveColorSettings(colors) {
    const user = auth.currentUser;
    if (user) {
        await setDoc(doc(db, "users", user.uid, "settings", "colors"), colors);
    }
}

async function loadColorSettings() {
    const user = auth.currentUser;
    if (user) {
        const docRef = doc(db, "users", user.uid, "settings", "colors");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            applyColors(docSnap.data());
        }
    }
}

onAuthStateChanged(auth, (user) => {
    if(user) {
        loadColorSettings();
    }
});

document.getElementById('save-custom-palette').addEventListener('click', () => {
    const colors = {
        main: mainColorInput.value,
        accent1: accent1ColorInput.value,
        accent2: accent2ColorInput.value
    };
    applyColors(colors);
    saveColorSettings(colors);
});

document.getElementById('default-palette').addEventListener('click', () => {
    const colors = { main: '#333333', accent1: '#f0f0f0', accent2: '#ffffff' };
    applyColors(colors);
    saveColorSettings(colors);
});

document.getElementById('dark-palette').addEventListener('click', () => {
    const colors = { main: '#121212', accent1: '#1e1e1e', accent2: '#ffffff' };
    applyColors(colors);
    saveColorSettings(colors);
});

document.getElementById('beach-palette').addEventListener('click', () => {
    const colors = { main: '#0077be', accent1: '#f9f1e4', accent2: '#ffffff' };
    applyColors(colors);
    saveColorSettings(colors);
});
