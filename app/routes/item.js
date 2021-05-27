import Route from '@ember/routing/route';
import { products } from '../data/products';
export default class ItemRoute extends Route {
  model(params) {
    const { item_id } = params;
    // buscando o id dentro da lista de products em data
    const product = products.find(({ id }) => id === item_id);
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
