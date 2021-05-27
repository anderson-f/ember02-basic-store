import Route from '@ember/routing/route';
/* tenho que importar a lista de produtos no index tbm para renderiza-los */
import { products } from '../data/products'
export default class IndexRoute extends Route {
  model() {
    return products;
  }
}
