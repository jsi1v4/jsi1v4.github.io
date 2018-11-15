$(document).ready(() => {
  /*-------------------------------------------------------------------------
    Personal
    License: MIT
    Author: Joseph
  */
  // Declarations
  let info = {
    name: "Jose Silva",
    title: "Analista Desenvolvedor Júnior",
    email: "josepaulo.araujos@gmail.com",
    linkedin: "www.linkedin.com/in/josesilva000",
    img: "assets/img/person.png"
  };
  let resume = {
    img: "assets/img/resume.png",
    info: `
            Sendo autodidata, procuro me desenvolver estudando e criando projetos práticos e próprios onde aplico diversas tecnologias estudadas,
            ampliando assim minha afinidade com desenvolvimento de ideias e de resolver problemas;
            Perfeccionista, culto e atento a qualidade e aos detalhes define o meu tipo profissional.
        `,
    goal: `
            Neste momento procuro dar continuidade a minha carreira em Tecnologia da informação, como analista/desenvolvedor júnior, 
            aplicando e absorvendo conhecimentos, como rotinas da área e desenvolvimento de sistemas/App.
        `
  };
  let professional = {
    info: `
            Dei início trabalhando como auxiliar no Grupo Pão de Açúcar, em seguida atuei no setor de planejamento operacional 
            no E-Commerce Walmart.com como assistente onde participei de rotinas administrativas, criação e automatização de controles 
            e kpis utilizando ferramentas e programação VBA/Html/Css/Sql, entre outras atividades diárias. 
            Logo após iniciei como analista/desenvolvedor júnior na G5 | Evercore criando e automatizando controles, 
            desenvolvendo novas features em sistema legado com Asp.Net, em backend NodeJs, banco de dados noSql com MongoDB, 
            em mobile com JavaScript e Swift e criando robôs de automatização com Python.
        `,
    experience: [
      {
        name: "Compackta prestadora de serviços do grupo Pão de Açucar",
        where: "Sao Paulo",
        beginDt: "2012-11-28",
        endDt: "2013-09-02",
        role: "Auxiliar/Conferente",
        details:
          "Separação de pedidos, conferencias de cargas e controle de docas.",
        img: "assets/img/empty.png",
        class: ""
      },
      {
        name: "Walmart.com",
        where: "Sao Paulo",
        beginDt: "2014-06-13",
        endDt: "2015-10-01",
        role: "Auxiliar de Faturamento",
        details:
          "Conferência de produtos e pedidos, emissão de notas fiscais e afins.",
        img: "assets/img/company/walmart.png",
        class: ""
      },
      {
        name: "Walmart.com",
        where: "Sao Paulo",
        beginDt: "2015-10-01",
        endDt: "2018-03-19",
        role: "Assistente",
        details:
          "Controle de Kpis, planejamento, criação de controles e relatórios, automação de controles utilizando: VBA, Dot.Net e Html, Excel Forms, Recordset e Functions, Acess Consultas, Formulários, Relatórios Avançados.",
        img: "assets/img/company/walmart.png",
        class: ""
      },
      {
        name: "G5 | Evercore",
        where: "Sao Paulo",
        beginDt: "2018-07-25",
        endDt: "Ate o momento",
        role: "Analista Desenvolvedor Junior",
        details:
          "Criação e automatização de controles com VBA, Desenvolvimentos: Intranet em Asp.Net, Robôs de captura de informações em Python, App de acesso para clientes em Swift, Web em Jquery/Html/Css como view (lógica em backend), Server em NodeJs/Express com render Pug/Jade, DataBase Sql Server e MongoDB.",
        img: "assets/img/company/g5.png",
        class: ""
      }
    ],
    voluntary: [
      {
        name: "Projeto de extensão da Universidade Nove de Julho",
        where: "Sao Paulo",
        beginDt: "2018-08-15",
        endDt: "Ate o momento",
        role: "Desenvolvedor",
        details:
          "Desenvolvimento com Php e framework Laravel: Front: Html/Css Blade Template (Laravel); Back: Route/Controller/Migrations (Laravel); Desenvolvimento em Banco de dados com MySql: Modelagem DER, Criação de scripts sql, Consultas e afins.",
        img: "assets/img/company/uninove.png",
        class: "timeline-item-6"
      }
    ]
  };
  let portfolio = {
    info:
      "Ao longo de meus estudos e experiência, desenvolvi alguns projetos descritos abaixo. Ainda assim tenho outros que ainda estão em processo. Obs: Informações fictícias e somente ilustrativas.",
    items: [
      {
        name: "Kpi de performace",
        img: [
          "assets/img/portfolio/excel1.png",
          "assets/img/portfolio/excel2.png"
        ],
        details: `
                    Kpi de performace de picking e faturamento com principais informações diárias, 
                    análise das principais areas e projeção de coleta em cima de headcount.
                  `
      },
      {
        name: "Kpi de análise e projeção",
        img: ["assets/img/portfolio/excel3.png"],
        details: `
                    Análise e projeção das principais informações mensais e historico de perfil de faturamento.
                  `
      },
      {
        name: "Sistema de Facilities em VBA",
        img: ["assets/img/portfolio/vba1.png", "assets/img/portfolio/vba2.png"],
        details: `
                    Sistema de abertura de chamados a diversas areas que compoe o setor de Facilities 
                    com controle, indicadores e relatorios automaticos. 
                    No mesmo utilizei Forms, Connection/Recorset com Access e Sql Server e CDO (e-mails automaticos).
                  `
      },
      {
        name: "Sistema de Facilities Web",
        img: [
          "assets/img/portfolio/web1.png",
          "assets/img/portfolio/web2.png",
          "assets/img/portfolio/web3.png"
        ],
        details: `
                    Sistema de abertura de chamados a diversas areas que compoe o setor de Facilities. 
                    Com front-end em Angular 2, com back-end em NodeJs e/ou Php e banco de dados com três possibilidades MySql, Sql Server ou Oracle 11g.
                  `
      },
      {
        name: "Sistema de Facilities Mobile",
        img: [
          "assets/img/portfolio/mobile1.png",
          "assets/img/portfolio/mobile2.png",
          "assets/img/portfolio/mobile3.png"
        ],
        details: `
                    Sistema de abertura de chamados a diversas areas que compoe o setor de Facilities. 
                    Com front-end em Ionic/Angular, com back-end em NodeJs e/ou Php e banco de dados com três possibilidades MySql, Sql Server ou Oracle 11g. 
                    Build de versões para Android e Ios utilizando Cordova.
                  `
      }
    ]
  };
  let skills = {
    info: "",
    formation: [
      {
        name: "Análise e Desenvolvimento de Sistemas",
        nivel: "Superior",
        details: `
                    Principais estudos:
                    Logica de programação;
                    Programação orientada a objetos;
                    Programação e modelagem de banco de dados;
                    Sistemas distribuídos;
                    Gestão de projetos;
                    Modelagem UML de sistemas;
                    Probabilidade e Estatística;
                    Circuitos integrados;
                    Estrutura de dados, Web e afins.
                `,
        img: "assets/img/company/uninove.png"
      },
      {
        name: "Hardware e Redes",
        nivel: "Tecnico",
        details: `
                    
                `,
        img: ""
      },
      {
        name: "Tec. em Informática",
        nivel: "Tecnico",
        details: `
                    
                `,
        img: ""
      }
    ],
    abilities: [
      {
        name: "",
        point: 0
      }
    ]
  };
  let code = {
    info: "",
    items: [
      {
        name: "",
        type: "",
        details: `
                    
                `
      }
    ]
  };

  // Personal Infos
  $("#person").attr("src", info.img);

  // Resume
  $("#resume-name").text(info.name + " - " + info.title);
  $("#resume-img").attr("src", resume.img);
  $("#resume-info").text(resume.info);
  $("#resume-goal").text(resume.goal);

  // Professional
  $("#professional-info").text(professional.info);

  professional.experience.forEach(element => {
    $("#professional-exp").append(`
            <li class="timeline-item">
                <div class="timeline-badge"><img class="img-responsive img-circle" src="${
                  element.img
                }"></div>
                <div class="timeline-panel ${element.class}">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">${element.name}</h4>
                        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> ${element.beginDt +
                          " - " +
                          element.endDt}</small></p>
                    </div>
                    <div class="timeline-body">
                        <h3>${element.role}</h3>
                        <span>${element.details}</span>
                    </div>
                </div>
            </li>
        `);
  });

  professional.voluntary.forEach(element => {
    $("#professional-vol").append(`
            <li class="timeline-item">
                <div class="timeline-badge"><img class="img-responsive img-circle" src="${
                  element.img
                }"></div>
                <div class="timeline-panel ${element.class}">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">${element.name}</h4>
                        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> ${element.beginDt +
                          " - " +
                          element.endDt}</small></p>
                    </div>
                    <div class="timeline-body">
                        <h3>${element.role}</h3>
                        <span>${element.details}</span>
                    </div>
                </div>
            </li>
        `);
  });

  // Portfolio
  $('#portfolio-info').text(portfolio.info);

  let itemsLi = '';
  portfolio.items.forEach(element => {

    for (let i = 0; i < element.img.length; i++) { 
      itemsLi += `
        <div class="item ${(i === 0) ? 'active' : ''}">
          <img class="img-responsive img-rounded" src="${element.img[i]}">
        </div>
      `;
    }

    $('#portfolio-items').append(
      `
        <div class="col-xs-12 col-md-4">
          <h3>${element.name}</h3>
          <div class="carousel slide extra-margin-top" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              ${itemsLi}
            </div>
          </div>
          <p class="extra-margin-top">${element.details}</p>
        </div>
      `
    );

    itemsLi = '';
  });


  /*-------------------------------------------------------------------------
    Bootstrap
    License: MIT
    Author: Team Bootstrap (https://getbootstrap.com/docs/3.3/)
  */
  // ScrollSpy
  $("body").scrollspy({
    target: "#main-menu"
  });
  $('[data-spy="scroll"]').each(function() { $(this).scrollspy("refresh") });

  // Carousel
  $('.carousel').each(function() {
    $(this).carousel();
  });

  /*-------------------------------------------------------------------------
    Loaders.Css
    License: MIT
    Author: Connor Atherton (https://connoratherton.com/loaders)
  */
  $('.loader-inner').loaders();
  // Loader page hide after 2sec
  setInterval(() => {$('#loader').hide();}, 2000);

  /* Wow.Js */
  new WOW().init();
  // Add effect in sections
  $('.wow').addClass('fadeIn');
});
