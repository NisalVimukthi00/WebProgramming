// ========================================
// ORIGINAL PROFILE IMAGE
// ========================================

const originalImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgOd90f7IgEv8EH6ZMLc6BG1r_vpI1C3SCPRl_vmmzA&s=10";


// ========================================
// NEW PROFILE IMAGE
// ========================================

const newImage =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";


// ========================================
// CHANGE PROFILE IMAGE
// ========================================

function changeProfileImage() {

    document.getElementById("profileImage").src = newImage;

}


// ========================================
// RESET PROFILE IMAGE
// ========================================

function resetProfileImage() {

    document.getElementById("profileImage").src = originalImage;

}


// ========================================
// CHANGE NAME
// ========================================

function changeName() {

    document.getElementById("studentName").innerHTML =
        "Welcome, Student!";

}


// ========================================
// CHANGE BACKGROUND
// ========================================

function changeBackground() {

    document.body.style.background =
        "linear-gradient(135deg, #dbeafe, #ff0000)";

}


// ========================================
// SHOW MESSAGE
// ========================================

function showMessage() {

    alert(
        "Welcome to Nisal Vimukthi's Student ID Card!"
    );

}


// ========================================
// SHOW SKILLS
// ========================================

function showSkills() {

    alert(
        "Skills:\n\n" +
        "• HTML\n" +
        "• CSS\n" +
        "• C Programming\n" +
        "• Web Development"
    );

}


// ========================================
// VISIT MY PORTFOLIO
// ========================================

function visitPortfolio() {

    alert(
        "Welcome to my portfolio!"
    );

    window.location.href =
        "https://nisalvimukthi.edu.lk";

}