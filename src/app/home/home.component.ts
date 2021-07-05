import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAccount, IAccountData } from '../models/shared';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destroy$: Subject<boolean> =  new Subject<boolean>();
  cardData: IAccountData[] = [];
  accountData: IAccountData[] = [];

  constructor(private dataService: AccountDataService) { }

  ngOnInit(): void {
    this.dataService.getData().pipe(takeUntil(this.destroy$)).subscribe((results) => {
      if(results?.success && results?.data?.accounts.length) {
        this.cardData = results.data.accounts.filter((account: IAccountData) => account.account_type == 'card');
        this.accountData = results.data.accounts.filter((account: IAccountData) => account.account_type == 'account');
        this.dataService.setCardData(this.cardData);
        this.dataService.setAccountData(this.accountData);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
