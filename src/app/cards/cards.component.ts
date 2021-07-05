import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MockCardList } from '../mock/card.mock';
import { CardAPIResult, ICard } from '../models/card';
import { IAccount, IAccountData } from '../models/shared';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() type: string | undefined = '';
  cards$: Observable<IAccountData[]> = new Observable<IAccountData[]>();
  constructor(private router: Router, private dataService: AccountDataService) { }

  ngOnInit(): void {
    if(this.type == 'card') {
      this.cards$ = this.dataService.currentCardData;
    }
    else if(this.type == 'account') {
      this.cards$ = this.dataService.currentAccountData;
    }
    
  }

  goToDetails(selection: IAccountData, type: string | undefined) {
    this.dataService.setCurrentCard(selection);
    if(type === 'card') {
      this.router.navigate(['./accounts/card/details/' + selection.account_id]);
    }
    else if(type === 'account'){
      this.router.navigate(['./accounts/account/details/' + selection.account_id]);
    }
    
  }

}
