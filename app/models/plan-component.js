import DS from 'ember-data';

export default DS.Model.extend({
  plan: DS.belongsTo('plan'),
  component: DS.belongsTo('component'),
  constraint: DS.attr({ defaultValue: 'disabled'}),
  extraPrice: DS.attr({ defaultValue: 0})
});
