import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.belongsTo('brand'),
  name: DS.attr(),
  planComponentGroups: DS.hasMany('plan-component-group')
});
