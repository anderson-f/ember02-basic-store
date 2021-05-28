import Service from '@ember/service';
import { tracked } from '@glimmer/tracking' // two way data binding do vue

class Item {
  @tracked count;

  name;
  color;
  image;
  price;

  constructor(item) {
    this.count = item.count;
    this.name = item.name;
    this.color = item.color;
    this.image = item.image;
    this.price = item.price;
  }
}
export default class ShoppingCartService extends Service {
  @tracked itemList = [];


  addItem(item) {
    // verifica se o item entrando ja existe na lista
    const existingItem = this.itemList.find(({ name, color}) => {
      return name === item.name && color === item.color;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      // Antigo jeito dando bug
      // this.itemList = [...this.itemList, {
      //   ...item,
      //   count: 1,
      // }];

      this.itemList = [...this.itemList, new Item({
        ...item,
        count: 1,
      })];
    }
  }

}
