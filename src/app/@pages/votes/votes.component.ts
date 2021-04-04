import { Component, OnInit } from '@angular/core';
import { Character } from '../../@core/interfaces/character.interface';
import { ApiService } from '../../@core/services/api.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  characters: Character[] = [];
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getCharacters(true).subscribe((data) => {
      this.characters = data;
      this.loading = false;
    });
    this.changeVotes();
  }

  changeVotes(): void {
    this.apiService.changeVotesListener().subscribe(({ data }) => {
      this.characters = data.changeVotes;
    });
  }

  addVote(character: string): void {
    this.apiService.addVote(character).subscribe((data) => {
      // console.log(data);
    });
  }
}
