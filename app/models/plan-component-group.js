import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  constraint: DS.attr({defaultValue: 'disabled'}),
  planComponents: DS.hasMany('plan-component')
});
