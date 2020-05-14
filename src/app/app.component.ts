import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick and Morty';
  
  photos = [
    {
      url:'https://rollingstone.uol.com.br/media/_versions/rick-morty-temporada-4_widelg.jpg',
      description:'rickAndMorty'
    },
    {
      url:'https://uploads.metropoles.com/wp-content/uploads/2019/10/07112336/rick-and-morty-adult-swim-450x300.jpg',
      description:'rickAndMorty2'
    }
  ];
  

}
