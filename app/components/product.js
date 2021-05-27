import Component from '@glimmer/component';
/* import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
 */
export default class ProductComponent extends Component {
  // o @ tracked diz que essa variavel vai ser vigiada e cada mudança dela irá refletir no template
  // @tracked number = 0;

  // é uma função que pode ser chamada através de alguma ação do template
/*   @action
  addNumber() {
    this.number = this.number + 1;
  } */

  /* forma de acessar o produto q foi passado como props no index */
  productImage = this.args.product.colors[0].image;
}
