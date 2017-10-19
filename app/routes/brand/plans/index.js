import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const brand = this.modelFor('brand');

    return Ember.RSVP.hash({
      brand: brand,
      model: brand.get('plans')
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }

});
