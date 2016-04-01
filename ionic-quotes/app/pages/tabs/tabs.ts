import {Page} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {QuotesPage} from '../quotes/quotes';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  profilePage: any = ProfilePage;
  quotesPage: any = QuotesPage;
}
