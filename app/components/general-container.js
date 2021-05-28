import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {

  @service shoppingCart;

  // a soma das contagens individuais de cada item
  get itemCount() {
    return this.shoppingCart.itemList.reduce((total, item) => {
      return total += item.count;
    }, 0);
  }
}
