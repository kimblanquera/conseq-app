import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { ChartsModule } from '../charts/charts.module';
import { CardSliderComponent } from './card-slider/card-slider.component';

import { DragScrollModule } from 'ngx-drag-scroll';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    CardDetailsComponent,
    CardSliderComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    TransactionsModule,
    ChartsModule,
    MatIconModule,
    DragScrollModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CardsComponent,
    CardComponent,
    CardDetailsComponent
  ]
})
export class CardsModule { }
