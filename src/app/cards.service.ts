import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
 

  constructor(
    private http: HttpClient,
    public environmentService:EnvironmentService
  ) { }

  getAllcards(): Observable<Object> {
    let url = this.environmentService.baseApiPath  + "api/cards"
    console.log("url is "+ url);
    let totalcards:any = this.http.get(url);
    console.log('cards is ' + totalcards);
    return totalcards;
  }

  getplayerCards(players:number): Observable<Object>{
    let cardgeturl = this.environmentService.baseApiPath  + "api/cards/playerCards?players="+players
    console.log("getplayercards="+cardgeturl);
    let playercards:any = this.http.get(cardgeturl);
    console.log('cards is ' + playercards);
    return playercards;
  }

  sortplayercards(cards:any)
  {
    let sorturl = this.environmentService.baseApiPath  + "api/cards/sortCards"
    let payload = {
      "cards":cards
    }
    return this.http.post(sorturl, payload);
  }
}
