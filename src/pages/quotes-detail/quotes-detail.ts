import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

/*
  Generated class for the QuotesDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes-detail',
  templateUrl: 'quotes-detail.html'
})
export class QuotesDetailPage {

  quoteDetail: {quote:'', author:''};

  constructor(private navCtrl: NavController,private navParams: NavParams) {
    this.quoteDetail = navParams.get('quote');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetailPage');
  }

  twitterShare(){
    console.log("in twitter share");
    let quote: string = this.quoteDetail.quote;
    SocialSharing.shareViaTwitter(quote.substring(0,110)+"..",null /*Image*/,"http://ionicframework.com/img/homepage/ionicview-icon_2x.png")
    .then((data )=>{
        alert("Success "+data);
      },

      (err)=>{
         alert("failed "+err)
      })
  }


}
