import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { IAccountData, ITransaction } from 'src/app/models/shared';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {

  @Input() cards: IAccountData[] | null = null;
  @Input() selectedCardId: string | null = null;
  @Input() totalTransactions: number = 0;
  @Input() totalAmount: number | null = null;

  @ViewChild('slider', {read: DragScrollComponent, static: false}) ds?: DragScrollComponent;

  selectedCardIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.cards) {
      this.selectedCardIndex = this.cards.findIndex((data: IAccountData) => data.account_id === this.selectedCardId);
    }
    
  }

  ngAfterViewInit() {
    if(this.selectedCardIndex > -1) {
      this.moveTo(this.selectedCardIndex);
    }
  }

  moveLeft() {
    if(this.cards) {
       const leftCard: IAccountData = this.cards[this.selectedCardIndex-1];
       this.goToDetails(leftCard.account_id, leftCard.account_type);
    }
  }

  moveRight() {
    if(this.cards) {
      const leftCard: IAccountData = this.cards[this.selectedCardIndex+1];
      this.goToDetails(leftCard.account_id, leftCard.account_type);
   }
  }

  moveTo(index: number) {
    this.ds?.moveTo(index);
  }

  goToDetails(selection: string, type: string | undefined) {
    if(type === 'card') {
      this.router.navigate(['./accounts/card/details/' + selection]);
    }
    else if(type === 'account'){
      this.router.navigate(['./accounts/account/details/' + selection]);
    }
    
  }

}
