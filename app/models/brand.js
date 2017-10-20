import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  plans: DS.hasMany('plan'),
  components: DS.hasMany('component'),
  usageTypes: DS.hasMany('usageType')
});
