// Sample data for projects (you can replace with your actual project data)
const projectsData = [
    {
        title: 'Project 1',
        description: 'This was my first project, my Portfolio',
        link: 'https://wol42verine.github.io/Challenge-2/' // Update with correct link
    },
    // Add more projects as needed
];

// Function to create project cards
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const viewLink = document.createElement('a');
    viewLink.textContent = 'View Project';
    viewLink.href = project.link;
    viewLink.target = '_blank'; // Open link in a new tab/window
    
    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(viewLink);
    
    return projectCard;
}

// Function to display projects
function displayProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsList.appendChild(projectCard);
    });
}

// Call displayProjects function when the page loads
document.addEventListener('DOMContentLoaded', displayProjects);
