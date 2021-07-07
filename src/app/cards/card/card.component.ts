import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockSingleCard } from 'src/app/mock/card.mock';
import { CardAPIResult, ICard } from 'src/app/models/card';
import { IAccountData } from 'src/app/models/shared';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() type: string | undefined = '';
  @Input() account: IAccountData | undefined;
  @Input() totalTransactions: number | null = null;
  @Input() totalAmount: number | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(selection: IAccountData, type: string | undefined) {
    if(type === 'card') {
      this.router.navigate(['./accounts/card/details/' + selection.account_id]);
    }
    else if(type === 'account'){
      this.router.navigate(['./accounts/account/details/' + selection.account_id]);
    }
    
  }

}
