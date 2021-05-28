// import JSONAPIAdapter from '@ember-data/adapter/json-api';
import RESTAdapter from '@ember-data/adapter/rest';
// JSONAPIAdapter

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`
  }
}
