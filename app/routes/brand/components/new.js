import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const brand = this.modelFor('brand');

    return this.store.createRecord('component', {brandId: brand.id});
  }
});
