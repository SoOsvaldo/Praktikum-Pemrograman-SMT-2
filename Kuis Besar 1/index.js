
// Mock database
let users = [];

document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Check if email already exists
    if (users.find(user => user.email === email)) {
        document.getElementById('message').innerText = "User with this email already exists!";
        console.log('gagal');

    } else {
        // Add user to the database
        users.push({ username, email, password });
        document.getElementById('message').innerText = "Registration successful!";
    }
});

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    // Check if user exists in the database
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = '/HOME KITA/index.html'

    } else {
        alert("Email or password is incorrect");
        window.location.href = '/HOME KITA/index.html'
    }
});
