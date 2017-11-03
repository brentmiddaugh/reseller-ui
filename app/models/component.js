import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  group: DS.attr(),
  brand: DS.belongsTo('brand')
});
