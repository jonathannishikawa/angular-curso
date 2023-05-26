import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  public character: Personaje = {
    nombre: '',
    poder: 0
  };

  emitCharacter(): void {
    if (this.character.nombre.length === 0) return;

    this.onNewCharacter.emit(this.character)

    this.character = {nombre:'', poder: 0}
  };
}
