import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    TransactionsListComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    TransactionsListComponent
  ]
})
export class TransactionsModule { }
