import { Injectable } from '@angular/core';
import { ChartData } from '../models/chart-data';
import { ITransaction, prop } from '../models/shared';

@Injectable({
  providedIn: 'root'
})
export class ChartDataHelperService {

  constructor() { }

  extractDataByMerchant(data: ITransaction[]) {
    const totalTransactions: number = data.length;
    const transactionsWithProp: ITransaction[] = data.filter((transaction: ITransaction) => transaction.merchant_name);
    const tally: Map<string, number> = new Map();

    transactionsWithProp.forEach((transaction: ITransaction) => {
      const merchant: string | undefined = transaction.merchant_name;
      if(merchant) {
        if(tally.has(merchant)) {
          let currentCount: number | undefined = tally.get(merchant);
          if(currentCount) {
            tally.set(merchant, currentCount++);
          }
          else {
            tally.set(merchant, 0);
          }
        }
        else {
          tally.set(merchant, 1);
        }
      }
    })

    return this.doTally(tally, totalTransactions, transactionsWithProp.length);

  }

  extractDataByClassification(data: ITransaction[]) {
    const totalTransactions: number = data.length;
    const transactionsWithProp: ITransaction[] = data.filter((transaction: ITransaction) => transaction.transaction_classification);
    const tally: Map<string, number> = new Map();

    transactionsWithProp.forEach((transaction: ITransaction) => {
      const classifications: string[] = transaction.transaction_classification as string[];
      if(classifications) {
        classifications.forEach((classification: string) => {
          if(tally.has(classification)) {
            let currentCount: number | undefined = tally.get(classification);
            if(currentCount) {
              tally.set(classification, currentCount++);
            }
            else {
              tally.set(classification, 0);
            }
          }
          else {
            tally.set(classification, 1);
          }
        })
        
      }
    })

    return this.doTally(tally, totalTransactions, transactionsWithProp.length);
  }

  extractDataBySubClassification(data: ITransaction[]) {
    const totalTransactions: number = data.length;
    const transactionsWithProp: ITransaction[] = data.filter((transaction: ITransaction) => transaction.sub_classification);
    const tally: Map<string, number> = new Map();

    transactionsWithProp.forEach((transaction: ITransaction) => {
      const classifications: string[] = transaction.sub_classification as string[];
      if(classifications) {
        classifications.forEach((classification: string) => {
          if(tally.has(classification)) {
            let currentCount: number | undefined = tally.get(classification);
            if(currentCount) {
              tally.set(classification, currentCount++);
            }
            else {
              tally.set(classification, 0);
            }
          }
          else {
            tally.set(classification, 1);
          }
        })
        
      }
    })

    return this.doTally(tally, totalTransactions, transactionsWithProp.length);
  }

  doTally(tally: Map<string, number>, totalTransactions: number, totalLabelledTransactions: number) {
    const chartData: ChartData[] = [];
    tally?.forEach((value: number, key: string) => {
      const data: ChartData = {
        name: key,
        value: value
      }
      chartData.push(data);
    })

    const emptyData: ChartData = {
      name: 'Unspecified',
      value: totalTransactions - totalLabelledTransactions
    }

    chartData.push(emptyData);

    return chartData;
  }

}
