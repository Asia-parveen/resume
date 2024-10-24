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
var toggleButton3 = document.getElementById('toggle-work-experence');
var workExperence = document.getElementById('work-experence');
toggleButton3.addEventListener('click', function () {
    if (workExperence.style.display === "none") {
        workExperence.style.display = "block";
    }
    else {
        workExperence.style.display = "none";
    }
});
