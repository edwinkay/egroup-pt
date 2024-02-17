import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  characters: any[] = [];

  constructor(private _marvel: MarvelService) {}

  ngOnInit(): void {
    this.loadCharacters();
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
}
