const projects = [
    { day: 1, title: "Personal Portfolio", folder: "BEGINNER/day-01-personal-portfolio", level: "Beginner" },
    { day: 2, title: "Responsive Landing Page", folder: "BEGINNER/day-02-responsive-landing-page", level: "Beginner" },
    { day: 3, title: "Todo List", folder: "BEGINNER/day-03-todo-list", level: "Beginner" },
    // ... Add all 100 days here following this pattern
    
    { day: 31, title: "Job Board", folder: "INTERMEDIATE/day-31-job-board", level: "Intermediate" },
    { 
  day: 32, 
  title: "Nike E-store", 
  folder: "INTERMEDIATE/day-45-my-intermediate-project", 
  level: "Intermediate"
},

    
    { day: 61, title: "Fullstack Ecommerce", folder: "ADVANCED/day-61-fullstack-ecommerce", level: "Advanced" }
];

const grid = document.getElementById('projects-grid');
const repoBaseUrl = "https://github.com/Shubham-cyber-prog/100-days-of-web-development/tree/main/";

const liveBaseUrl = "https://Shubham-cyber-prog.github.io/100-Days-Of-Web-Development/";   // Update based on your github pages deployment

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="card-header">
            <span class="badge ${project.level.toLowerCase()}">${project.level}</span>
            <span class="day-number">Day ${project.day}</span>
        </div>
        <h3>${project.title}</h3>
        <p>A ${project.level} level project built with HTML, CSS, and JS.</p>
        <div class="card-actions">
            <a href="${liveBaseUrl}${project.folder}/index.html" target="_blank" class="btn-small">Live Demo</a>
            <a href="${repoBaseUrl}${project.folder}" target="_blank" class="btn-small outline">View Code</a>

        </div>
    `;
    grid.appendChild(card);
});