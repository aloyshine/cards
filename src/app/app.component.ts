import { Component, OnInit } from '@angular/core';
import {CardsService} from './cards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'cardsView'
  cardlist: any = [];
  constructor( public cardsService: CardsService)
  {
  }
  ngOnInit() 
  {
    this.cardsService.getAllcards().subscribe(res=>{
      this.cardlist = res;
    });
  }
}
