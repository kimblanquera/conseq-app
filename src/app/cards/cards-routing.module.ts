import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'card/details/:cardId', component: CardDetailsComponent },
  { path: 'account/details/:accountId', component: CardDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
