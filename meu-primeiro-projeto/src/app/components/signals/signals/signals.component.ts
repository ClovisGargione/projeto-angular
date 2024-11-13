import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Clovis");
  public lastName = signal("Gargione");

  public fullName = computed(() => {
    return this.firstName() + " " + this.lastName();
  });

  public array = signal([1]);

  constructor( ) {
    effect(() => {
      console.log(this.firstName());
      console.log(this.array());
    });
  }

  public updateName(value: string) {
    return this.firstName.set(value);
  }

  public updateArray () {
    this.array.update( (arr: Array<number>) => {
      return  arr.concat(arr.length+1); //[...arr, value];
    });
  }
}
