import {Page, NavController} from 'ionic-angular';
import {Storage, LocalStorage} from 'ionic-angular';
import {Http, Headers} from 'angular2/http';
import {FORM_DIRECTIVES} from 'angular2/common';
import {JwtHelper} from 'angular2-jwt';
import {AuthService} from '../../services/auth/auth';

const map: any = require('rxjs/add/operator/map');

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var Auth0Lock: any;

@Page({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  auth: AuthService;
  // lock: Auth0Lock = new Auth0LockPasswordless('lKON6UJJV5zP6KePediJ1rQlRQUFHKLV', 'lychees.auth0.com');
  lock: Auth0Lock = new Auth0Lock('lKON6UJJV5zP6KePediJ1rQlRQUFHKLV', 'lychees.auth0.com');
  local: Storage = new Storage(LocalStorage);
  user: {username: '', email: ''};

  constructor() {
    this.auth = AuthService;
    let profile = this.local.get('profile')._result;
    if (profile) {
      this.user = JSON.parse(profile);
    }
  }

  login() {
    this.lock.showSignin((err, profile, token) => {
    // this.lock.sms((err, profile, token) => {
      if (err) {
        alert(err);
        console.log("error log in");
        return;
      }

      this.local.set('profile', JSON.stringify(profile));
      this.local.set('id_token', token);
      this.user = profile;

    });
  }

  logout() {
    this.local.remove('profile');
    this.local.remove('id_token');
    this.user = null;
  }
}
