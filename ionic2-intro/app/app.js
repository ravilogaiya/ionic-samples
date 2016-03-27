import {App, Platform, Storage, LocalStorage} from 'ionic-angular';
import {HomePage} from './pages/home/home';
import {IntroPage} from './pages/intro/intro';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.platform = platform;
    this.local = new Storage(LocalStorage);
    console.log("introShown2=" + this.local.get('introShown2')._result);
    this.local.get('introShown2').then((result) => {
      if (result == 'true') {
        console.log("Home page");
        this.rootPage = HomePage;
      } else {
        console.log("Intro page");
        console.log("result = " + result);
        this.local.set('introShown2', true);
        this.rootPage = IntroPage;
      }
    });

    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
