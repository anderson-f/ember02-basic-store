import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// import { products } from '../data/products';
export default class ItemRoute extends Route {
  @service store; // para aplicar o conceito de model

  async model(params) {
    const { item_id } = params;

    const data = await this.store.findAll('product');

    // jeito sem ember data
    // const response = await fetch('/api/items.json')
    // const { data } = await response.json();

    // buscando o id dentro da lista de products em data
    const product = data.find(({ id }) => id === item_id);
    return product;
  }

  /*
    Pesquisar um pouco mais sobre isso, não entendi tão bem, mas pra navegar entre os itens
    é preciso fazer isso pra meio que atualizar o dado de acordo com um e outro
  */

  /*
    The problem is the color property only setup once when init, if you navigate between pages,
    this property will only be the first value unless we use setupController or turn color into getter.
  */


  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color
  }
}
