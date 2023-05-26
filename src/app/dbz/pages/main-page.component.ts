import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Personaje[] {
    return [...this.dbzService.personajes]
  }

  onDeleteCharacter(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Personaje): void {
    this.dbzService.AddCharacter(character);
  }
}

