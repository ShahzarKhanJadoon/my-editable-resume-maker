const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
const resumeContent = document.getElementById("resume-content") as HTMLElement;
const editButton = document.getElementById("edit-button") as HTMLButtonElement;

let currentResumeData: { name: string; email: string; phone: string; education: string; experience: string; skills: string } | null = null;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

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
    editButton.classList.remove("hidden");  // Show the edit button
});


editButton.addEventListener("click", () => {
    if (currentResumeData) {
        (document.getElementById("name") as HTMLInputElement).value = currentResumeData.name;
        (document.getElementById("email") as HTMLInputElement).value = currentResumeData.email;
        (document.getElementById("phone") as HTMLInputElement).value = currentResumeData.phone;
        (document.getElementById("education") as HTMLTextAreaElement).value = currentResumeData.education;
        (document.getElementById("experience") as HTMLTextAreaElement).value = currentResumeData.experience;
        (document.getElementById("skills") as HTMLTextAreaElement).value = currentResumeData.skills;

        resumeDisplay.classList.add("hidden");
        editButton.classList.add("hidden");  
    }
});
