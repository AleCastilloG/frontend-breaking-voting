import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../@core/services/api.service';
import { Character } from '../../@core/interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  loading = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.api.getCharacters(false).subscribe((data) => {
      this.characters = data;
      this.loading = false;
    });
  }
}
