import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de Java'
    },
    {
      src: 'icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJs'
    },
    {
      src: 'icons/knowledge/database.svg',
      alt: 'Ícone de conhecimento de Banco de Dados'
    },
    {
      src: 'icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de Html'
    },
    {
      src: 'icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS'
    },
    {
      src: 'icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de SASS'
    },
    {
      src: 'icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de Javascript'
    },
    {
      src: 'icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular'
    },
    {
      src: 'icons/knowledge/vuejs.svg',
      alt: 'Ícone de conhecimento de VueJs'
    },
    {
      src: 'icons/knowledge/docker.svg',
      alt: 'Ícone de conhecimento de Docker'
    },
    
    {
      src: 'icons/knowledge/git.svg',
      alt: 'Ícone de conhecimento de GIT'
    }
  ]);
}
