import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: "img/docker.png",
      alt: "Projeto msbiblioteca",
      title: "Projeto em Microserviços para leitor",
      width: "100px",
      height: "86px",
      description: "Projeto em microserviços para leitor utilizando mensageria, requisições síncronas e assíncronas, Maven, OAuth2, Spring boot, Spring Cloud, Discovery Server, Gateway, balanceamento de carga e Docker.",
      link: [{
        name: "MSBiblioteca",
        href: "https://github.com/ClovisGargione/msbiblioteca"
      }]
    },
    {
      src: "img/spring-boot-project-logo.png",
      alt: "Projeto mscredito",
      title: "Projeto em Microserviços para avaliação de crédito",
      width: "100px",
      height: "86px",
      description: "Projeto em microserviços para avaliação de crédito utilizando mensageria, requisições síncronas e assíncronas, Maven, Keycloak, Spring boot, Spring cloud, Discovery Server, Gateway, balanceamento de carga e Docker.",
      link: [{
        name: "MSCredito",
        href: "https://github.com/ClovisGargione/mscredito"
      }]
    },
    {
      src: "img/node-e-java.png",
      alt: "Projeto pagamento checkout",
      title: "Projeto em Microserviços para pagamento e checkout",
      width: "200px",
      height: "86px",
      description: "Projeto em microserviços para pagamento e checkout utilizando Spring boot, Maven, Spring cloud, Gateway e NodeJs.",
      link: [{
        name: "Pagamento e checkout",
        href: "https://github.com/ClovisGargione/pagamento_checkout"
      }]
    },
    {
      src: "img/wildfly.svg",
      alt: "Projeto Biblioteca Digital",
      title: "Projeto Biblioteca Digital",
      width: "100px",
      height: "86px",
      description: "Projeto para biblioteca utilizando Java 17, Maven, Wildfly e VueJs.",
      link: [{
        name: "Biblioteca Digital",
        href: "https://github.com/ClovisGargione/biblioteca-digital"
      }]
    },
    {
      src: "img/Criptografia.png",
      alt: "Projeto Criptografia",
      title: "Projeto Criptografia de ponta a ponta",
      width: "100px",
      height: "86px",
      description: "Projeto para criptografia utilizando Java 17, Maven, OAuth2, Spring boot e VueJs.",
      link: [{
        name: "Criptografia",
        href: "https://github.com/ClovisGargione/criptografia"
      }]
    },
    {
      src: "img/java.png",
      alt: "Projeto Votação Pauta",
      title: "Projeto Votação Pauta",
      width: "100px",
      height: "86px",
      description: "Projeto para votação em pauta utilizando Java 17, Maven, JMeter, Spring boot, Swagger,  e SQLite.",
      link: [{
        name: "Votação Pauta",
        href: "https://github.com/ClovisGargione/votacao-pauta"
      }]
    },
    {
      src: "img/nodejs.png",
      alt: "Projeto Freelancer",
      title: "Projeto Freelancer",
      width: "100px",
      height: "86px",
      description: "Projeto para freelance utilizando NodeJs, MongoDB, AWS S3 e VueJs.",
      link: [{
        name: "Freelancer",
        href: "https://github.com/ClovisGargione/Freelancer"
      }]
    }
  ]);
}
