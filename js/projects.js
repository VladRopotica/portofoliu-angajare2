const projects = [
    {
        name: 'PROJECT ONE',
        type: 'WEB DESIGN',
        pos: 'start',
        image:'./images/cazino.jpg'
    },

     {
        name: 'PROJECT TWO',
        type: 'GRAPHIC DESIGN',
        pos: 'mid',
        image:'./images/lac.jpg'
    },

     {
        name: 'PROJECT THREE',
        type: 'WEB DESIGN',
        pos: 'end',
        image:'./images/_DSC0187.jpg'
    },

     {
        name: 'PROJECT FOUR',
        type: 'WEB DESIGN',
        pos: 'mid',
        image:'./images/_DSC0202.jpg'
    },

     {
        name: 'PROJECT FIVE',
        type: 'WEB DESIGN',
        pos: 'end',
        image:'./images/_DSC0287.jpg'
    },

     {
        name: 'PROJECT SIX',
        type: 'WEB DESIGN',
        pos: 'mid',
        image:'./images/cazino.jpg'
    },

     {
        name: 'PROJECT SEVEN',
        type: 'WEB DESIGN',
        pos: 'start',
        image:'./images/6.jpeg'
    },

     {
        name: 'PROJECT EIGHT',
        type: 'WEB DESIGN',
        pos: 'mid',
        image:'./images/3.jpeg'
    }

]


const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement('div')
        panel.classList.add('project', `${project.pos}`)

        let imageContainer = document.createElement('div');

        imageContainer.className = `image__container`
        
        let image = document.createElement('img');
        image.classList.add('project__image')
        image.src = project.image

        let projectDetails = document.createElement('div')
        projectDetails.classList.add('project__details')

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p')
        projectType.innerText = project.type

        projectDetails.append(projectTitle, projectType)

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetails);

        document.querySelector('.projects__slider').appendChild(panel)
    })
}


export {
    createProjects
}