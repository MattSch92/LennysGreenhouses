let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Retrieve login status
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Initialize favorites

// Function to save favorites to local storage
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to autofill the profile form
function autoFillProfileForm() {
    const username = document.getElementById('register-username'); 
    const email = document.getElementById('register-email'); 
    
    username.value = localStorage.getItem('username') || ''; 
    email.value = localStorage.getItem('email') || ''; 
}

// Function to login a user
function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    console.log('Logging in User:', username);
    
    // Simulate successful login
    alert('Login successful for ' + username);
    
    // Update login status
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('email', 'user@example.com'); 

    // Show the logout button, profile link, and hide the login/register forms
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('logout-button').style.display = 'block'; 
    document.getElementById('profile-link').style.display = 'block'; 
    
    return false; 
}

// Function to logout a user
function logoutUser() {
    console.log('Logging out User');
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false'); 

    document.getElementById('logout-button').style.display = 'none'; 
    document.getElementById('profile-link').style.display = 'none'; 
    document.getElementById('login-form').style.display = 'block'; 
    document.getElementById('register-form').style.display = 'none'; 
    document.getElementById('login-username').value = ''; 
    document.getElementById('login-password').value = ''; 

    return false; 
}

// Function to load favorites and login status on page load
window.onload = function() {
    console.log('Page Loaded. isLoggedIn:', isLoggedIn);
    
    if (isLoggedIn) {
        autoFillProfileForm();
        document.getElementById('logout-button').style.display = 'block'; 
        document.getElementById('profile-link').style.display = 'block'; 
        updateFavoritesDisplay(); 
    } else {
        document.getElementById('logout-button').style.display = 'none'; 
        document.getElementById('profile-link').style.display = 'none'; 
    }
};

// Function to update the displayed favorites
function updateFavoritesDisplay() {
    const favoritesList = document.querySelector('.favorites ul'); 
    if (!favoritesList) return; 
    
    favoritesList.innerHTML = ''; 

    favorites.forEach((plantName) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${plantName} <button onclick="removeFavorite('${plantName}')">Remove</button>`;
        favoritesList.appendChild(listItem);
    });
}
