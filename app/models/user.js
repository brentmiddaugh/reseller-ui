import DS from 'ember-data';

export default DS.Model.extend({
  reseller: DS.belongsTo('reseller'),
  name: DS.attr(),
  email: DS.attr()
});
