import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class AboutController extends Controller {
  isExpended = false

  @action
  toggleBody(){
    this.toggleProperty('isExpended');
  }
}
