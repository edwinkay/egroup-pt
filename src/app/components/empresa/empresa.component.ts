import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  creators: any[] = [];

  constructor(private _marvel: MarvelService) {
    this.loadCreators();
  }

  ngOnInit(): void {}

  loadCreators() {
    this._marvel.getCreators().subscribe(
      (data) => {
        this.creators = data.data.results;
      },
      (error) => {
        console.error('Error fetching creators:', error);
      }
    );
  }
}
