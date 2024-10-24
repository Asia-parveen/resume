var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
var toggleButton2 = document.getElementById('toggle-education');
var education = document.getElementById('education');
toggleButton2.addEventListener('click', function () {
    if (education.style.display === "none") {
        education.style.display = "block";
    }
    else {
        education.style.display = "none";
    }
});
