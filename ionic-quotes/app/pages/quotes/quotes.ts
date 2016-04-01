import {Page, NavController} from 'ionic-angular';
import {Http} from 'angular2/http';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import {AuthService} from '../../services/auth/auth';

const map = require('rxjs/add/operator/map');

/*
  Generated class for the QuotesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/quotes/quotes.html',
})
export class QuotesPage {
  API: string = "http://localhost:3001/api";
  quote: string;
  error: string;
  auth: AuthService;

  static get parameters() {
    return [[NavController], [Http], [AuthHttp]];
  }

  constructor(private nav, private http, private authHttp) {
    this.auth = AuthService;
  }

  getQuote() {
    // Use a regular Http call to access unsecured routes
    this.http.get(`${this.API}/random-quote`)
      .map(res => res.text())
      .subscribe(
        data => this.quote = data,
        err => this.error = err
      );
  }

  getSecretQuote() {
    // Use authHttp to access secured routes
    this.authHttp.get(`${this.API}/protected/random-quote`)
      .map(res => res.text())
      .subscribe(
        data => this.quote = data,
        err => this.error = err
      );
  }
}
