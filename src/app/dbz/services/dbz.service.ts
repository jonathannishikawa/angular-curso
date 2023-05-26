import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { v4 as uuid } from 'uuid'
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes: Personaje[] = [
    {
      id:uuid(),
      nombre: 'Krillin',
      poder: 1000
    },
    {
      id:uuid(),
      nombre: 'Goku',
      poder: 15000
    },
    {
      id:uuid(),
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  AddCharacter(character: Personaje): void {

    const newCharacter: Personaje = {id:uuid(), ...character};

    this.personajes.push(newCharacter);
  };

  // onDeleteCharacter(index: number){
  //   this.personajes.splice(index, 1)
  // }

  deleteCharacterById (id: string) {
    this.personajes = this.personajes.filter( character => character.id !== id);
  }

}
