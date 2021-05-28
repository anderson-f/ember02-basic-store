import Route from '@ember/routing/route';
/* tenho que importar a lista de produtos no index tbm para renderiza-los */
// import { products } from '../data/products'
import { inject as service } from '@ember/service'
export default class IndexRoute extends Route {
  @service store;
  // mudar model pra assincrona
  async model() {
    // sem o ember data
    // const response = await fetch('/api/products.json')
    // const { data } = await response.json();
    // return data
    // return products; // antes retornava os produtos diretamente
    return this.store.findAll('product');
  }
}
