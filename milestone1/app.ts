const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;
toggleButton.addEventListener('click', () => {
    if (skills.style.display === "none"){
        skills.style.display = "block"
    }else{
        skills.style.display = "none"
    }
});



const toggleButton2 = document.getElementById('toggle-education') as HTMLButtonElement;
const education = document.getElementById('education') as HTMLElement;
toggleButton2.addEventListener('click', () => {
    if (education.style.display === "none"){
        education.style.display = "block"
    }else{
        education.style.display = "none"
    }

})
