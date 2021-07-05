import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';

import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartsModule } from '../charts/charts.module';


@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    TransactionsModule,
    MatTabsModule,
    ChartsModule
  ],
  exports: [
    CardsComponent,
    CardComponent,
    CardDetailsComponent
  ]
})
export class CardsModule { }
