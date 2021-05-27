import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

/* Foi criado um controller pra rota item que é uma rota que tem o componente imagem e detalhe
e eu posso passar a cor pra dentro do detalhe e renderizar a escolha de cores dentro do detalhe do item */
export default class ItemController extends Controller {
  @tracked color = 'red';

  /* a imagem depende da cor e eu tenho a cor nesse controller posso criar esse get pra obter o caminho
  da imagem a ser renderizada */
  get productImage() {
    return `/assets/images/beats-solo-${this.color}.png`;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
