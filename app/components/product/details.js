import Component from '@glimmer/component';
import { inject as service } from '@ember/service'; // vou chamar o service dessa forma em todos lugares
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {

  @service('shopping-cart') cart;

  @action
  addToCart() {
    // pegando os valoes que foram passados do template item
    const { name, color, colors, price} = this.args
    // a função add item está dentro do service
    this.cart.addItem({
      name,
      color,
      image: colors.find(colorInfo => colorInfo.color === color).image,
      price: price.current,
    });
  }
}
