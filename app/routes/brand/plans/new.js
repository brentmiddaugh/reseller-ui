import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const brand = this.modelFor('brand');
    const store = this.store;
    return Ember.RSVP.hash({
      components: brand.get( 'components' ),
      model: this.store.createRecord('plan')
    });
  },

  setupController(controller, models) {
    const store = this.store;
    const componentGroups = models['components'].reduce(function(r,a) {
      r[a.get('group')] = r[a.get('group')] || [];
      r[ a.get('group') ].push(a);
      return r;
    }, Object.create(null));

    for(var key in componentGroups) {
      const components = componentGroups[key];
      const planComponents = components.map(function(c) {
        return store.createRecord('plan-component', {
          component: c,
          name: c.get('name')
        });
      });

      models['model'].get( 'planComponentGroups' ).pushObject(store.createRecord('plan-component-group', {
        name: key,
        planComponents: planComponents
      }));
                                                        };
    controller.setProperties(models);
  }

});
