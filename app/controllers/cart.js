import Controller from '@ember/controller';
/* injetando um service no controller */
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  // subtotal = 0;
  // tax = 0;
  // total = 0;
  // @service shoppingCart; // posso querer dar um nome personalizado pro meu service

  // Nome personalizado para o service
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  // Action para aumentar a quantidade de itens de dentro do carrinho
  // o segundo argumento vai ser o even
  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if(count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
    console.log('count', item.count);
  }
}
