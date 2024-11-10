"use strict";
const form = document.getElementById("resume-form");
const resumeDisplay = document.getElementById("resume-display");
const resumeContent = document.getElementById("resume-content");
const editButton = document.getElementById("edit-button");
let currentResumeData = null;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    currentResumeData = { name, email, phone, education, experience, skills };
    const resumeHTML = `
        <div class="resume-section">
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
        </div>
        <div class="resume-section">
            <h3>Education Background</h3>
            <p>${education}</p>
        </div>
        <div class="resume-section">
            <h3>Professional Experience</h3>
            <p>${experience}</p>
        </div>
        <div class="resume-section">
            <h3>Core Skills</h3>
            <p>${skills}</p>
        </div>
    `;
    resumeContent.innerHTML = resumeHTML;
    resumeDisplay.classList.remove("hidden");
    editButton.classList.remove("hidden"); // Show the edit button
});
editButton.addEventListener("click", () => {
    if (currentResumeData) {
        document.getElementById("name").value = currentResumeData.name;
        document.getElementById("email").value = currentResumeData.email;
        document.getElementById("phone").value = currentResumeData.phone;
        document.getElementById("education").value = currentResumeData.education;
        document.getElementById("experience").value = currentResumeData.experience;
        document.getElementById("skills").value = currentResumeData.skills;
        resumeDisplay.classList.add("hidden");
        editButton.classList.add("hidden");
    }
});
