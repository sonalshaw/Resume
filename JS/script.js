document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").textContent = profileData.name;
    document.getElementById("about").textContent = profileData.about;
    
    document.getElementById("address").textContent = `Address: ${profileData.contact.address}`;
    document.getElementById("phone").textContent = `Phone: ${profileData.contact.phone}`;
    document.getElementById("email").textContent = `Email: ${profileData.contact.email}`;
    document.getElementById("linkedin").textContent = `Linkedin: ${profileData.contact.linkedin}`;

    profileData.skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        document.getElementById("skills").appendChild(li);
    });

    profileData.strengths.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        document.getElementById("strengths").appendChild(li);
    });

    let experienceDiv = document.getElementById("experience");
    profileData.experience.forEach(job => {
        let expBlock = document.createElement("div");
        expBlock.innerHTML = `<strong>${job.company}</strong> - ${job.role} (${job.duration})`;
        
        let ul = document.createElement("ul");
        job.responsibilities.forEach(task => {
            let li = document.createElement("li");
            li.innerHTML = task;
            ul.appendChild(li);
        });

        expBlock.appendChild(ul);
        experienceDiv.appendChild(expBlock);
    });

    document.getElementById("education").innerHTML = `
        ${profileData.education.degree}
        ${profileData.education.institution} ||
        Year: ${profileData.education.year} ||
        CGPA: ${profileData.education.cgpa}
    `;
});

