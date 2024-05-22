document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  let projectId = parseInt(urlParams.get('id'), 10);

  const projectData = {
    1: {
      title: "Store",
      description: "Neste projeto foi construido uma plataforma que permite o login e cadastro de usuário, a renderização do produtos retornados do backend, assim como a criação, edição e exclusão.",
      images: ["/img/Store/Store01.png", "/img/Store/store02.png", "/img/Store/store03.png", "/img/Store/store04.png"],
      link: "https://lexart-app-frontend.vercel.app/login",
      repo: "https://github.com/itaji-create/lexart-app-frontend",
      technologies: ["React", "Bootstrap"]
    },
    2: {
      title: "Recipes",
      description: "Um projeto front-end de receitas com as funcionalidade de buscar, favoritar e filtrar receitas de comidas e bebidas",
      images: ["/img/Recipes/recipes01.png", "/img/Recipes/recipes02.png", "/img/Recipes/recipes03.png", "/img/Recipes/recipes04.png", "/img/Recipes/recipes05.png", "/img/Recipes/recipes06.png", "/img/Recipes/recipes07.png", "/img/Recipes/recipes08.png"],
      link: "https://recipes-app-ten-lovat.vercel.app/foods",
      repo: "https://github.com/itaji-create/recipes-app",
      technologies: ["React", "Bootstrap"]
    },
    3: {
      title: "Delivery",
      description: "Essa aplicação é responsável por criar e integrar o back-end e front-end, criando uma plataforma de delivery de cerveja com 3 tipos de acesso: Administrador, Vendedor e Cliente.",
      images: ["/img/Delivery/delivery01.png", "/img/Delivery/delivery02.png", "/img/Delivery/delivery03.png", "/img/Delivery/delivery04.png", "/img/Delivery/delivery05.png"],
      link: "#",
      repo: "https://github.com/itaji-create/Delivery",
      technologies: ["React", "Bootstrap", "Express", "MySql", "Node.js"]
    }
  };

  function loadProject(id) {
    if (projectData[id]) {
      const project = projectData[id];
      document.getElementById('project-title').textContent = project.title;
      document.getElementById('project-description').textContent = project.description;
      
      const carouselInner = document.getElementById('carousel-inner');
      project.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item${index === 0 ? ' active' : ''}`;
        slide.innerHTML = `<img src="${image}" class="d-block w-100" alt="Imagem do Projeto">`;
        carouselInner.appendChild(slide);
      });
      document.getElementById('project-link').href = project.link;
      document.getElementById('project-repo').href = project.repo;
      document.getElementById('project-technologies').innerHTML = project.technologies.map(tech => `<a href="/pages/tecnologia.html?tec=${tech}" class="tech-link">${tech}</a>`).join(", ");
    } else {
      document.getElementById('project-title').textContent = "Projeto não encontrado";
      document.getElementById('project-description').textContent = "";
      document.getElementById('carousel-inner').innerHTML = "";
      document.getElementById('project-link').style.display = "none";
      document.getElementById('project-repo').style.display = "none";
      document.getElementById('project-technologies').innerHTML = "";
    }
  }

  function updateURL(id) {
    window.history.pushState({}, '', `?id=${id}`);
    loadProject(id);
  }
  
  document.getElementById('prev-project').addEventListener('click', function() {
    if (projectId > 1) {
      projectId -= 1;
      updateURL(projectId);
      location.reload();
    }
  });

  document.getElementById('next-project').addEventListener('click', function() {
    if (projectId < Object.keys(projectData).length) {
      projectId += 1;
      updateURL(projectId);
      location.reload();
    }
  });
  loadProject(projectId);
});