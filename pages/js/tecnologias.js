document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const techName = urlParams.get('tec');

  const techData = {
    "React": {
      name: "React",
      site: "https://reactjs.org",
      definition: "Uma biblioteca JavaScript para criar interfaces de usuário.",
      pros: ["Desempenho rápido", "Componentização", "Grande comunidade"],
      cons: ["Curva de aprendizado", "Alta velocidade de mudanças", "Depende de outras bibliotecas"],
      projects: ["Facebook", "Instagram", "WhatsApp", "Airbnb", "Netflix", "Dropbox"]
    },
    "Node.js": {
      name: "Node.js",
      site: "https://nodejs.org",
      definition: "Um ambiente de execução JavaScript server-side.",
      pros: ["Alta escalabilidade", "Boa performance", "Grande comunidade"],
      cons: ["Modelo assíncrono complexo", "Menos adequado para aplicações CPU-intensivas", "Callback hell"],
      projects: ["LinkedIn", "Netflix", "Uber", "Trello", "PayPal", "eBay"]
    },
    "Express": {
      name: "Express",
      site: "https://expressjs.com",
      definition: "Um framework para Node.js que facilita o desenvolvimento de aplicações web.",
      pros: ["Leve e rápido", "Flexível", "Grande comunidade"],
      cons: ["Menos opinativo", "Menos adequado para grandes aplicações monolíticas", "Depende de middleware"],
      projects: ["MySpace", "Uber", "IBM", "Fox Sports", "Accenture", "PayPal"]
    },
    "MySql": {
      name: "MySql",
      site: "https://mysql.com",
      definition: "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto que utiliza a linguagem SQL. Ele é amplamente utilizado para armazenar e gerenciar dados em diversas aplicações, desde sites simples até sistemas empresariais complexos",
      pros: ["É de código aberto e amplamente suportado pela comunidade", "Possui alta performace e escalabilidade", "É altamente compatível com diversas plataformas e linguagens de programação"],
      cons: ["Pode enfrentar problemas de escalabilidade em ambientes de alta demanda", "Não possui recursos avançados de segurança e gerenciamento de transações comparados a alguns concorrentes", "Suporte limitado para algumas funcionalidades avançadas em comparação com sistemas de banco de dados proprietários"],
      projects: ["YouTube", "Facebook", "Twitter", "Netflix", "Wikipedia", "Google"]
    },
    "Bootstrap": {
      name: "Bootstrap",
      site: "https://www.getbootstrap.com",
      definition: "Bootstrap é um framework front-end de código aberto para desenvolvimento de sites e aplicações web. Ele fornece um conjunto de ferramentas para criação rápida de designs responsivos e compatíveis com diversos dispositivos.",
      pros: ["Facilita o desenvolvimento de layouts responsivos.", "Oferece uma ampla gama de componentes pré-estilizados.", "É altamente personalizável e extensível"],
      cons: ["Pode gerar aparência genérica nos sites se não personalizado adequadamente", "A curva de aprendizado inicial pode ser íngreme para iniciantes", "Dependendo da costumização, o código gerado pode ser pesado"],
      projects: ["Twitter", "Airbnb", "Udemy", "Slack", "Lyft", "Instagram"]
    }
  };

  function loadTechnology(tech) {
    if (techData[tech]) {
      const data = techData[tech];
      document.getElementById('tech-name').textContent = data.name;
      document.getElementById('tech-definition').textContent = data.definition;
      document.getElementById('tech-site').href = data.site;
      document.getElementById('tech-site').textContent = data.site;

      const prosList = document.getElementById('tech-pros');
      prosList.innerHTML = '';
      data.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = pro;
        prosList.appendChild(li);
      });

      const consList = document.getElementById('tech-cons');
      consList.innerHTML = '';
      data.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = con;
        consList.appendChild(li);
      });

      const projectsList = document.getElementById('tech-projects');
      projectsList.innerHTML = '';
      data.projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project;
        projectsList.appendChild(li);
      });
    } else {
      document.getElementById('tech-name').textContent = "Tecnologia não encontrada";
      document.getElementById('tech-definition').textContent = "";
      document.getElementById('tech-site').style.display = "none";
      document.getElementById('tech-pros').innerHTML = "";
      document.getElementById('tech-cons').innerHTML = "";
      document.getElementById('tech-projects').innerHTML = "";
    }
  }

  loadTechnology(techName);
});