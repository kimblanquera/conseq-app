import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    TransactionsListComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    TransactionsListComponent
  ]
})
export class TransactionsModule { }
