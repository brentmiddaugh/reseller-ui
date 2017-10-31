import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const brand = this.modelFor('brand');
    const store = this.store;
    return Ember.RSVP.hash({
      components: brand.get( 'components' ),
      model: $.getJSON(`/api/brands/${brand.id}/plans/default`).then(function(data) {
        return store.createRecord('plan', data);
      })
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }

});
