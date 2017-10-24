import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  brand: DS.belongsTo(),

  children: DS.hasMany('usage-type', { inverse: null})
});
