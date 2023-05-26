import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Personaje[] = [{
    nombre: 'Trunks',
    poder: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id)
  };

}
