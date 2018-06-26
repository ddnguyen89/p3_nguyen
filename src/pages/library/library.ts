import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import quotes from '../../data/quotes';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[]; 
  quotePage = QuotePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
