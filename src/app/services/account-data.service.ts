import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAccount, IAccountData, ITransactionResult } from '../models/shared';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  cardData: BehaviorSubject<IAccountData[]> = new BehaviorSubject<IAccountData[]>([]);
  accountData: BehaviorSubject<IAccountData[]> = new BehaviorSubject<IAccountData[]>([]);
  currentCardData: Observable<IAccountData[]> = this.cardData.asObservable();
  currentAccountData: Observable<IAccountData[]> = this.accountData.asObservable();
  selectedCard: BehaviorSubject<IAccountData | null> = new BehaviorSubject<IAccountData | null>(null);
  currentSelectedCard: Observable<IAccountData | null> = this.selectedCard.asObservable();

  constructor(private readonly http: HttpClient) { }

  getData() {
    return this.http.get<IAccount>(environment.data_api);
  }

  getAccountData(id: string | null) {
    const url: string = `${environment.data_api}${id}/`;
    return this.http.get<ITransactionResult>(url);
  }

  getAccountById(id: string | null, type: string | null) {
      const result = this.getData().pipe(map((results: IAccount) => results.data.accounts.filter((account: IAccountData) => account.account_type === type && account.account_id === id)[0]))
      return result;
  }

  setCardData(data: IAccountData[]) {
    this.cardData.next(data);
  }

  setAccountData(data: IAccountData[]) {
    this.accountData.next(data);
  }

  setCurrentCard(data: IAccountData) {
    this.selectedCard.next(data);
  }
}
