import { Component, Input, OnInit } from '@angular/core';
import { IAccountData } from 'src/app/models/shared';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: IAccountData | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
