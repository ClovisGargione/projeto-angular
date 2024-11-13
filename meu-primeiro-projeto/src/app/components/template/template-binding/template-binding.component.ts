import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Clovis Gargione Rodrigues";
  public age = 39;
  public isDisabled = false;
  public srcValue = "https://lh3.googleusercontent.com/EUHFjMpMj-UPEu6jfEEP8TPV7QxQerc-n_qulHi3MFPnK_63i5ldHApJsutq7wXqNmN9V2rmk9swsQ9I0eddAv77HIO4uv6gKt8haNAMqjiM9pqNu9w";


  public sum(valor1:number, valor2:number){
    return valor1 + valor2;
  }

  public sumAge(){
    return this.age++;
  }

  public subAge(){
    return this.age--;
  }

  public onKeyDown(event: Event){
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent){
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    });
  }
}

