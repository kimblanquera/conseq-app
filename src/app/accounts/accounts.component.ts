import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccountData } from '../models/shared';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts$: Observable<IAccountData[]> = new Observable<IAccountData[]>();
  constructor(private dataService: AccountDataService) { }

  ngOnInit(): void {
    this.accounts$ = this.dataService.currentAccountData;
  }

}
