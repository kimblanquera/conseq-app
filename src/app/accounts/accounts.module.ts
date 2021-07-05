import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AccountComponent } from './account/account.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AccountsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatCardModule
  ]
})
export class AccountsModule { }
