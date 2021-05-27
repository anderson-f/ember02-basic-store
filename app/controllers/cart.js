import Controller from '@ember/controller';
/* injetando um service no controller */
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  // subtotal = 0;
  // tax = 0;
  // total = 0;
  // @service shoppingCart; // posso querer dar um nome personalizado pro meu service

  // Nome personalizado para o service
  @service('shopping-cart') cart;

  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal
  }

  get total() {
    return this.subtotal + this.tax
  }
}
