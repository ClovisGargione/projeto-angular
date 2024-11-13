import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor de software sênior II",
        p: "Vindi | Agosto de 2022 - o momento"
      },
      text: "<p>Desenvolvimento de novas features para a contratação e análise de crédito.</p>"+
            "<p>Manutenção de backend e frontend dos projetos.</p>"+
            "<p>Correção de bugs e melhorias.</p>"+
            "<p>Papel de QA na realização de testes.</p>"+
            "<p>Atendimento ao suporte do sistema interno utilizado pela mesa de crédito e contratação de propostas.</p>"+
            "<p>Desenvolvimento de novas telas em frontend utilizando VueJS.</p>"+
            "<p>Integração entre sistemas internos e externos como salesforce.</p>"+
            "<p>Manutenção de base de dados utilizando migrations com liquibase.</p>"+
            "<p>Análise de logs com a ferramenta CloudWatch da AWS.</p>"+
            "<p>Execução de tarefas do backlog através da ferramenta Jira.</p>"+
            "<p>Gerenciador de versões com GIT.</p>"+
            "<p>Code Review.</p>"
    },
    {
      summary: {
        strong: "Arquiteto de Software",
        p: "Philips | Junho de 2020 - Julho de 2022"
      },
      text: "<p>Criação de novas tabelas, funcionalidades e views na ferramenta schematics.</p>"+
            "<p>Desenvolvimento de novas features nos módulos do ERP Tasy, utilizando os componentes desenvolvidos</p>"+
            "<p>internamente pela tecnologia.</p>"+
            "<p>Reporte direto com o analista de sistemas.</p>"+
            "<p>Desenvolvimento de novos componetes utilizados pelas equipes de desenvolvimento dos módulos do ERP Tasy.</p>"+
            "<p>Correção de bugs nos componentes e atendimento direto com clientes através de conexão com Teamviewer.</p>"+
            "<p>Documentação dos componetes criados incluindo diagramas.</p>"+
            "<p>Testes unitários.</p>"+
            "<p>Code Review e manutenção de versões.</p>"
    },
    {
      summary: {
        strong: "Analista de Sistemas",
        p: "Dynamix Software | Agosto de 2018 - Maio de 2020"
      },
      text: "<p>Análise, desenvolvimento e manutenção em linguagem Java JSF do sistema de ajuste de intercâmbio entre Unimeds de todo o Brasil.</p>"+
            "<p>Implementação de Scripts para Oracle e manutenção de versionamento de base utilizando o Liquibase.</p>"+
            "<p>Atendimento direto com o cliente.</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor de Sistemas Sênior",
        p: "Loghaus | Novembro de 2017 - Julho de 2018"
      },
      text: "<p>Análise, desenvolvimento e manutenção nas plataformas web jsp e mobile Android do sistema de e-commerce Quintess.</p>"+
            "<p>Servidor de aplicação Wildfly, implementações e manutenção de serviços REST em linguagem Java.</p>"+
            "<p>Liberação de versões do app na Play Store.</p>"+
            "<p>Desenvolvimento de aplicações de uso interno e de campanhas.</p>"+
            "<p>Integração contínua da aplicação com a ferramenta GoCD.</p>"+
            "<p>Apresentação de projetos internos para gerentes da área.</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor de Sistemas",
        p: "Senior Sistemas | Setembro de 2014 - Novembro de 2017"
      },
      text: "<p>Desenvolvimento e análise no projeto Ronda de Vigilantes.</p>"+
            "<p>Participei no desenvolvimento do servidor em arquitetura SOA em linguagem Java.</p>"+
            "<p>Jersey para implementação dos serviços REST.</p>"+
            "<p>Especificação JPA e Hibernate para implementação na utilização de banco de dados.</p>"+
            "<p>Moxy para json.</p>"+
            "<p>Nimbus para controle de autenticação por token.</p>"+
            "<p>Desenvolvimento do aplicativo Android utilizando volley para implementação das requisições de serviço com o servidor.</p>"+
            "<p>Recursos de hardware do Android como câmeras, GPS e NFC na IDE Android Studio.</p>"+
            "<p>Participei do desenvolvimento do Front End desacoplado utilizando AngularJs, JavaScript, Html5, Metro UI, CSS, Satellizer token authentication, UI Router para controle de roteamento e transição de páginas.</p>"+
            "<p>Desenvolvimento da arquitetura e implementação no Front End do projeto de controle de portaria utilizando Html5, JavaScript, AngularJs, Metro UI, CSS, UI Router, Satellizer token authentication, manipulação de webcam entre outros módulos externos do AngularJs.</p>"+
            "<p>Desenvolvimento da estrutura e implementação no Front-End do projeto SAM em padrão AMD com RequireJS utilizando AngularJS, JavaScript, HTML 5, Metro UI, CSS, Satellizer token authentication, UI Router para controle de roteamento e transição de páginas, Upload de arquivos para o servidor da Amazon, manipulação de webcam, configuração e implementação de testes unitários com Karma entre outros módulos externos do AngularJS.</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor de Sistemas",
        p: "Microton | Abril de 2014 - Setembro de 2014"
      },
      text: "<p>Desenvolvimento e Análise de novas aplicações utilizando banco de dados SQLite.</p>"+
            "<p>Aplicações desktop em linguagem Java para documentação fiscal eletrônica.</p>"+
            "<p>Aplicação dos serviços web services da Sefaz utilizando Axis2 para gerar as classes de serviço.</p>"+
            "<p>Construção de documentos eletrônicos em XML utilizando JAXB.</p>"+
            "<p>Acesso em páginas web, captura e manipulação de dados utilizando Selenium e HTMLUnit.</p>"+
            "<p>Desenvolvimento das aplicações na IDE Eclipse com WindowBuilder.</p>"+
            "<p>Desenvolvimento para plataforma Android.</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor de Sistemas",
        p: "NeoGrid | Agosto de 2013 - Março de 2014 "
      },
      text: "<p>Desenvolvimento de sistema web para gestão de frete em linguagem Java (JSF), JPA 2, Hibernate, suíte de componentes do PrimeFaces para desenvolvimento do ambiente gráfico.</p>"+
            "<p>Servidor de aplicação TomCat.</p>"+
            "<p>Implementação de testes automatizados com o framework JUnit.</p>"+
            "<p>Banco de dados PostgreSql.</p>"+
            "<p>Desenvolvimento de sistema web para NFS-e em linguagem java(JSP), Hibernate, padrão MVC.</p>"+
            "<p>Servidor de aplicação TomCat.</p>"+
            "<p>Ferramenta SoapUI para realizar teste de conexão com Web Services.</p>"+
            "<p>Integração com padrões de prefeituras para NFS-e aplicando os serviços do web Service para comunicação e serviço.</p>"+
            "<p>Montagem de XML de acordo com o padrão exigido.</p>"+
            "<p>Validações com XSD.</p>"+
            "<p>JasperReports com a ferramenta iReport para impressão de notas fiscais de serviço e RPS.</p>"
    },
    {
      summary: {
        strong: "Desenvolvedor de Sistemas",
        p: "GovernarTI | Março de 2012 - Agosto de 2013"
      },
      text: "<p>Desenvolvimento de sistemas web para gerenciamento de cooperativas de crédito utilizando linguagem Java(JSP), Javascript, HTML, CSS, JSON, AJAX, MVC, Spring, Struts.</p>"+
            "<p>Suíte de componentes EXTjs para desenvolvimento de ambiente gráfico.</p>"+
            "<p>Servidor de aplicação TomCat.</p>"+
            "<p>Conexão com banco de dados via JDBC.</p>"+
            "<p>JasperReports para gerar relatórios.</p>"+
            "<p>Banco de dados MySQL, SQL Server.</p>"
    },
    {
      summary: {
        strong: "Auxiliar de Suporte Técnico",
        p: "Otimis | Junho de 2011 - Março de 2012"
      },
      text: "Atendimento N1 no suporte técnico para sistema WMS."
    }

  ]);
}
