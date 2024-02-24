import {Component, EventEmitter, Input,Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'SSS-urlhandlelist',
  templateUrl: './urlhandlelist.component.html',
  styleUrls: ['./urlhandlelist.component.css']
})
export class UrlhandlelistComponent {

  @Input() ParentComponentName : string = "";
  @Input() ParentComponentEntityId : string = "";
  @Output() urlhandlelist = new EventEmitter <string[]> ();  

  heroes = [''];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
    this.urlhandlelist.emit(this.heroes);
  }

  removeHero(index: any): void{ 
    this.heroes.splice(index, 1);
  } 
}