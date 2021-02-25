import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeDetail } from '../pokemon';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: []
})
export class MyComponentComponent implements OnInit {

  id: string='';
  selectedPokeId: string='';
  searchPokeName: string='';
  pokes: Pokemon[] = [];
  pokeDetail: PokeDetail | undefined;

  constructor( private pokeService: PokeAPIServiceService, 
    private pokeShareInfoService: PokeShareInfoService ) {

    // this.pokes.push(new Pokemon('1', 'pikachu'));
    // this.pokes.push(new Pokemon('2', 'bulbasaur'));
    // this.pokes.push(new Pokemon('3', 'ivysaur'));
    // this.pokes.push(new Pokemon('4', 'venusaur'));
    // this.pokes.push(new Pokemon('5', 'charmander'));
   }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e: any, index: any) => {
      this.pokes.push( new Pokemon(index, e.name, e.url));
      });
    }
    );
  }

  go() {

    this.pokeShareInfoService.setValue(this.selectedPokeId);

    if (this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    };
  }
}
