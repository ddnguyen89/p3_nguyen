import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesCollection: {category: string, quotes: Quote[], icon: string}[]; 
  quotesPage = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ngOnInit() {
    this.quotesCollection = quotes;
  }

}
