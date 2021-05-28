// attr ajuda a definir os atributos da model
import Model, { attr } from '@ember-data/model';

// essa model olha pro atributo products
export default class ProductModel extends Model {
  // @attr id;
  @attr name;
  @attr description;
  @attr price;
  @attr features;
  @attr colors;
}
