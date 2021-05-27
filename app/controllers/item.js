import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

/* Foi criado um controller pra rota item que é uma rota que tem o componente imagem e detalhe
e eu posso passar a cor pra dentro do detalhe e renderizar a escolha de cores dentro do detalhe do item */
export default class ItemController extends Controller {
  /* agora estou pegando o valor armazenado na minha lista de produtos */
  /* isso foi instanciado no arquiivo de rotas na parte de model */
  /* @tracked color = this.model.colors[0].color; */ //existia um bug dessa forma
  /* Cannot read property 'image' of  undefined */
  @tracked color = this.model.colors[0].color;

  @tracked isZoomed = false;

  /* a imagem depende da cor e eu tenho a cor nesse controller posso criar esse get pra obter o caminho
  da imagem a ser renderizada */
  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }

  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
