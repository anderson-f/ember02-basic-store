import Service from '@ember/service';
import { tracked } from '@glimmer/tracking' // two way data binding do vue

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    // reescrevendo o item na lista de itens
    this.itemList = [...this.itemList, item];
  }
}
