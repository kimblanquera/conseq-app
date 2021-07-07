import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HasSubClassification, ITransaction, ITransactionData, TransactionClassification } from 'src/app/models/shared';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsListComponent implements OnInit {

  @Input() transactions: ITransaction[] = [];
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['data']
  selectedPageSize: number = 10;
  currentPage: number = 0;
  expandedElement: ITransaction | null = null;
  dataSource: MatTableDataSource<ITransaction> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.transactions.slice(0, this.selectedPageSize));
  }

  changePage($event: PageEvent) {
    const start: number = $event.pageIndex * this.selectedPageSize;
    const end: number = start + this.selectedPageSize;
    const pageData: ITransaction[] = this.transactions.slice(start, end);
    this.dataSource = new MatTableDataSource(pageData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}