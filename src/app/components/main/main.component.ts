import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  characters: any[] = [];
  comic: any;

  constructor(private _marvel: MarvelService) {}

  ngOnInit(): void {
    this.loadCharacters();
    this.loadComic();
  }

  loadCharacters() {
    this._marvel.getCharacters().subscribe(
      (data) => {
        this.characters = data.data.results;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }
  loadComic() {
    const comicId = 123;
    this._marvel.getComic(comicId).subscribe(
      (data) => {
        this.comic = data.data.results[0];
      },
      (error) => {
        console.error('Error fetching comic:', error);
      }
    );
  }
}
