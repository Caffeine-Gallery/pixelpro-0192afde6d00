import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch and update About Me section
    const aboutMe = await backend.getAboutMe();
    document.getElementById('about-me-content').textContent = aboutMe;
    document.getElementById('job-title').textContent = aboutMe;

    // Fetch and update Skills section
    const skills = await backend.getSkills();
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach((skill, index) => {
      const skillHtml = `
        <div class="skill clearfix">
          <h4>${skill}</h4>
          <div class="skill-value">${Math.floor(Math.random() * 30) + 70}%</div>
        </div>
        <div class="skill-container skill-${index + 1}">
          <div class="skill-percentage"></div>
        </div>
      `;
      skillsContainer.innerHTML += skillHtml;
    });

    // Fetch and update Education section
    const education = await backend.getEducation();
    const educationContainer = document.getElementById('education-container');
    education.forEach(edu => {
      const eduHtml = `
        <div class="timeline-item clearfix">
          <div class="left-part">
            <h5 class="item-period">${edu.title}</h5>
            <span class="item-company">University of Studies</span>
          </div>
          <div class="divider"></div>
          <div class="right-part">
            <h4 class="item-title">${edu.title}</h4>
            <p>${edu.content}</p>
          </div>
        </div>
      `;
      educationContainer.innerHTML += eduHtml;
    });

    // Fetch and update Experience section
    const experiences = await backend.getExperiences();
    const experienceContainer = document.getElementById('experience-container');
    experiences.forEach(exp => {
      const expHtml = `
        <div class="timeline-item clearfix">
          <div class="left-part">
            <h5 class="item-period">${exp.title}</h5>
            <span class="item-company">Company Name</span>
          </div>
          <div class="divider"></div>
          <div class="right-part">
            <h4 class="item-title">${exp.title}</h4>
            <p>${exp.content}</p>
          </div>
        </div>
      `;
      experienceContainer.innerHTML += expHtml;
    });

    // Fetch and update Portfolio section
    const projects = await backend.getProjects();
    const portfolioContainer = document.getElementById('portfolio-container');
    projects.forEach((project, index) => {
      const projectHtml = `
        <figure class="item standard" data-groups='["category_all", "category_detailed"]'>
          <div class="portfolio-item-img">
            <img src="img/portfolio/${index + 1}.jpg" alt="${project.title}" title="" />
            <a href="portfolio-project-${index + 1}.html" class="ajax-page-load"></a>
          </div>
          <i class="far fa-file-alt"></i>
          <h4 class="name">${project.title}</h4>
          <span class="category">${project.content}</span>
        </figure>
      `;
      portfolioContainer.innerHTML += projectHtml;
    });

  } catch (error) {
    console.error("Error fetching data from backend:", error);
  }
});

// Handle contact form submission
document.getElementById('contact_form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('form_name').value;
  const email = document.getElementById('form_email').value;
  const subject = document.getElementById('form_subject').value;
  const message = document.getElementById('form_message').value;

  // Here you would typically send this data to your backend
  console.log("Form submitted:", { name, email, subject, message });

  // Clear the form
  e.target.reset();

  // Show a success message
  document.querySelector('.messages').innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
});
