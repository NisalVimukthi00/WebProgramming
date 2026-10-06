// ========================================
// Original Profile Image
// ========================================

const originalImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgOd90f7IgEv8EH6ZMLc6BG1r_vpI1C3SCPRl_vmmzA&s=10";


// ========================================
// New Profile Image
// ========================================

const newImage =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";


// ========================================
// Change Profile Image
// ========================================

function changeProfileImage() {

    document.getElementById("profileImage").src = newImage;

}


// ========================================
// Reset Profile Image
// ========================================

function resetProfileImage() {

    document.getElementById("profileImage").src = originalImage;

}


// ========================================
// Change Name
// ========================================

function changeName() {

    document.getElementById("name").innerHTML =
        "Welcome, Student!";

}


// ========================================
// Change Background
// ========================================

function changeBackground() {

    document.body.style.backgroundColor = "lightblue";

}


// ========================================
// Show Message
// ========================================

function showMessage() {

    alert("Welcome to my personal profile!");

}


// ========================================
// Show Skills
// ========================================

function showSkills() {

    alert("My skills are HTML, CSS and Python.");

}


// ========================================
// Visit My Page
// ========================================

function visitPage() {

    alert("Welcome to Nisal Vimukthi's page!");

    window.location.href = "https://www.google.com";

}

// ========================================
// Visit My Portfolio
// ========================================

function visitPortfolio() {

    alert("Welcome to my portfolio!");

    window.location.href = "https://nisalvimukthi.edu.lk";

}