  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCXHCBldMKAyS7DGi1Fd5WieNN4-b0U-jo",
    authDomain: "app-123ae.firebaseapp.com",
    projectId: "app-123ae",
    storageBucket: "app-123ae.firebasestorage.app",
    messagingSenderId: "16578846880",
    appId: "1:16578846880:web:6df3f64ed6304b8f2e29c5",
    measurementId: "G-CYYB4MYH5H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// DOM Elements
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginBtn.addEventListener("click", () => {
  loginBtn.style.backgroundColor = "#21264D";
  registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
  registerBtn.style.backgroundColor = "#21264D";
  loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Sign Up
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  // Create User with Email and Password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userRef = ref(database, 'users/' + user.uid);
      // Save user data to Firebase Realtime Database
      set(userRef, {
        email: email,
        password: password
      });
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
});

// Sign In
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  // Sign In User
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href='page.html'
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
});


// CARD FUNCTION
// Login Function
function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    alert('Login Successful ✅');
  } else {
    alert('Please fill all fields.');
  }
}

// Register Function
function register() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    alert('Signup Successful ✅');
  } else {
    alert('Please fill all fields.');
  }
}
