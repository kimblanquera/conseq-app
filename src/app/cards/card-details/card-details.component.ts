import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { MockCardTransactions, MockSingleCard } from 'src/app/mock/card.mock';
import { CardAPIResult, ICard } from 'src/app/models/card';
import { ChartData } from 'src/app/models/chart-data';
import { HasSubClassification, IAccountData, ITransaction, ITransactionData, ITransactionResult, TransactionAPIResult, TransactionClassification } from 'src/app/models/shared';
import { AccountDataService } from 'src/app/services/account-data.service';
import { ChartDataHelperService } from 'src/app/services/chart-data-helper.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  card$: Observable<IAccountData | null> = new Observable<IAccountData | null>();
  transactions$: Observable<ITransactionData[]> = new Observable<ITransactionData[]>();
  transactions: ITransaction[] = [];
  chartDataMerchant: ChartData[] = [];
  chartDataMainClass: ChartData[] = [];
  chartDataSubClass: ChartData[] = [];
  id: string | null = '';
  type: string | null = '';
  totalAmount: number = 0;
  constructor(private chartService: ChartDataHelperService, private dataService: AccountDataService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((map: ParamMap) => {
      if(map.has('cardId')) {
        this.id = map.get('cardId');
        this.type = 'card';
      }
      else if(map.has('accountId')) {
        this.id = map.get('accountId');
        this.type = "account";
      }
      if(this.id?.length) {
        this.card$ = this.dataService.getAccountById(this.id, this.type);
        this.dataService.getAccountData(this.id).subscribe((result: ITransactionResult) => {
          this.transactions = result.data.transactions.map((value: ITransactionData) => {
            const transaction: ITransaction = value.data;

            if(transaction.transaction_classification?.length) {
              if(HasSubClassification(transaction.transaction_classification[0])) {
                const classifications: TransactionClassification[] = transaction.transaction_classification as TransactionClassification[];
                let mains: string[] = [];
                let subs: string[] = [];
                classifications.forEach((value: TransactionClassification) => {
                  subs = [...subs, ...value.sub_classification_categories];
                  mains = [...mains, value.classification_category];
                });
                if(subs.length) {
                  transaction.sub_classification = [...subs];
                }
                if(mains.length) {
                  transaction.transaction_classification = [...mains];
                }
              }
            }

            this.totalAmount = this.totalAmount + transaction.amount;

            return transaction
          });

          this.chartDataMerchant = this.chartService.extractDataByMerchant(this.transactions);
          this.chartDataMainClass = this.chartService.extractDataByClassification(this.transactions);
          this.chartDataSubClass = this.chartService.extractDataBySubClassification(this.transactions);
        })
      }
    })
  }

}
