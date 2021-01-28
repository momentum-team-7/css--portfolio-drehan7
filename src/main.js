let homeStuff = document.querySelector(".home-page");
let projectStuff = document.querySelector(".projects-page");
let homeButton = document.querySelector(".home-button");
let projectsButton = document.querySelector(".projects-button");

homeButton.addEventListener('click', e => {
    if (homeStuff.style.display === "none") {
        homeStuff.style.display = "block";
    } else {
        homeStuff.style.display = "none";
    }
    
})

projectsButton.addEventListener("click", e => {
    if (projectStuff.style.display === "none") {
        projectStuff.style.display = "block";
    } else {
        projectStuff.style.display = "none";
    }
})
