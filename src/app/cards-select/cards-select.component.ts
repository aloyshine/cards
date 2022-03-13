import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef, ViewChild, Input } from '@angular/core';
import {CardsService} from '../cards.service';
@Component({
  selector: 'app-cards-select',
  templateUrl: './cards-select.component.html',
  styleUrls: ['./cards-select.component.scss']
})
export class CardsSelectComponent implements OnInit {

  players: number[] = [1,2,3,4,5,6,7,8];
  @Input() allCardList: any;
  cardsSelected:boolean = false;
  selectedplayer:number;
  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
  }

  selectEvent(event:any)
  {
    console.log(event.target.value)
    this.selectedplayer = event.target.value;
    if(this.selectedplayer != 0)
    {
      this.cardsService.getplayerCards(this.selectedplayer).subscribe(res=>{
        this.allCardList = res
        this.cardsSelected = true;
      })
    }
  }

  sortevent()
  {
    if((this.cardsSelected == true) && (this.selectedplayer != 0))
    {
      this.cardsService.sortplayercards(this.allCardList).subscribe(res=>{
        this.allCardList = res;
        this.cardsSelected = false;
      })
    }
  }

  startagain()
  {
    this.cardsService.getAllcards().subscribe(res=>{
      this.allCardList = res;
      this.cardsSelected = false;
    })
  }

}
