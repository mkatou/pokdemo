import { Component } from '@angular/core';
import { PokeAPIServiceService } from './poke-apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokeAPIServiceService]
})
export class AppComponent {
  title = 'Pokdemo';
}
