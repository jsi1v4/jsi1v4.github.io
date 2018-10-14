$(document).ready(() => {

    /* Declarations */
    let info = {
        name: 'Jose Silva',
        email: 'josepaulo.araujos@gmail.com',
        linkedin: 'www.linkedin.com/in/josesilva000',
        resume:
        `
            Sendo autodidata, procuro me desenvolver estudando e criando projetos práticos e próprios onde aplico diversas tecnologias estudadas,
            ampliando assim minha afinidade com desenvolvimento de ideias e de resolver problemas;
            Perfeccionista, culto e atento a qualidade e aos detalhes define o meu tipo profissional.
        `,
        professional:
        `
            Dei início trabalhando como auxiliar no Grupo Pão de Açúcar, em seguida atuei no setor de planejamento operacional 
            no E-Commerce Walmart.com como assistente onde participei de rotinas administrativas, criação e automatização de controles 
            e kpis utilizando ferramentas e programação VBA/Html/Css/Sql, entre outras atividades diárias. 
            Logo após iniciei como analista/desenvolvedor júnior na G5 | Evercore criando e automatizando controles, 
            desenvolvendo novas features em sistema legado com Asp.Net, em backend NodeJs, banco de dados noSql com MongoDB, 
            em mobile com JavaScript e Swift e criando robôs de automatização com Python.
        `,
        goal:
        `
            Neste momento procuro dar continuidade a minha carreira em Tecnologia da informação, como analista/desenvolvedor júnior, 
            aplicando e absorvendo conhecimentos, como rotinas da área e desenvolvimento de sistemas/App.
        `,
        formation:
        [
            {
                name: 'Análise e Desenvolvimento de Sistemas',
                nivel: 'Superior',
                details:
                `
                    Banco de dados: Modelagem e Oracle 11g; 
                    Linguagens: C, Java, C#, PHP, PL/SQL e Html/Css/JavaScript; 
                    Infra: Redes, hardware e Sistemas Distribuídos; 
                    Gestão: Qualidade de software, Engenharia de software e Processos de Negócios; 
                    Outros: Estáticas, Empreendedorismo, processos de desenvolvimento.
                `
            },
            {
                name: 'Hardware e Redes',
                nivel: 'Tecnico',
                details:
                `
                    
                `
            },
            {
                name: 'Tec. em Informática',
                nivel: 'Tecnico',
                details:
                `
                    
                `
            }
        ],
        experience:
        [
            {
                name: 'Compackta Ltda',
                where: 'Sao Paulo',
                beginDt: '2012-11-28',
                endDt: '2013-09-02',
                role: 'Auxiliar/Conferente',
                details: 'Separação de pedidos, conferencias de cargas e controle de docas.'
            },
            {
                name: 'Walmart.com',
                where: 'Sao Paulo',
                beginDt: '2014-06-13',
                endDt: '2015-10-01',
                role: 'Auxiliar de Faturamento',
                details: 'Conferência de produtos e pedidos, emissão de notas fiscais e afins.'
            },
            {
                name: 'Walmart.com',
                where: 'Sao Paulo',
                beginDt: '2015-10-01',
                endDt: '2018-03-19',
                role: 'Assistente',
                details: 'Controle de Kpis, planejamento, criação de controles e relatórios, automação de controles utilizando: VBA, Dot.Net e Html, Excel Forms, Recordset e Functions, Acess Consultas, Formulários, Relatórios Avançados.'
            },
            {
                name: 'G5 | Evercore',
                where: 'Sao Paulo',
                beginDt: '2018-07-25',
                endDt: 'Ate o momento',
                role: 'Analista Programador Junior',
                details: 'Criação e automatização de controles com VBA, Desenvolvimentos: Intranet em Asp.Net, Robôs de captura de informações em Python, App de acesso para clientes em Swift, Web em Jquery/Html/Css como view (logica em backend), Server em NodeJs/Express com render Pug/Jade, DataBase em Sql Server e MongoDB.'
            }
        ],
        voluntary:
        [
            {
                name: 'Projeto de extensão da Universidade Nove de Julho',
                where: 'Sao Paulo',
                beginDt: '2018-08-15',
                endDt: 'Ate o momento',
                role: 'Programador',
                details: 'Desenvolvimento com Php e framework Laravel: Front: Html/Css Blade Template (Laravel); Back: Route/Controller/Migrations (Laravel); Desenvolviemento em Banco de dados com MySql: Modelagem DER, Criação de scripts sql, Consultas e afins.'
            }
        ]
    }

    /* ScrollSpy */
    $('body').scrollspy({ target: '#main-menu' });
    $('[data-spy="scroll"]').each(
        () => $(this).scrollspy('refresh')
    );

    /* Append */
    $('#person').src('assets/img/person.png');

    $('#info#name').text(info.name);
    $('#info#email').text(info.email);
    $('#info#linkedin').text(info.linkedin);

    $('#info#resume').text(info.resume);
    $('#info#professional').text(info.professional);
    $('#info#goal').text(info.goal);
    $('#info#voluntary').text(info.voluntary);

    $('#formation#name').text(info.formation.name);
    $('#formation#nivel').text(info.formation.nivel);
    $('#formation#details').text(info.formation.details);

    $('#experience#name').text(info.experience.name);
    $('#experience#where').text(info.experience.where);
    $('#experience#beginDt').text(info.experience.beginDt);
    $('#experience#endDt').text(info.experience.endDt);
    $('#experience#role').text(info.experience.role);
    $('#experience#details').text(info.experience.details);

    $('#voluntary#name').text(info.voluntary.name);
    $('#voluntary#where').text(info.voluntary.where);
    $('#voluntary#beginDt').text(info.voluntary.beginDt);
    $('#voluntary#endDt').text(info.voluntary.endDt);
    $('#voluntary#role').text(info.voluntary.role);
    $('#voluntary#details').text(info.voluntary.details);
});
