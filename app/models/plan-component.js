import DS from 'ember-data';
import Ember from 'ember';
const {
  computed
} = Ember;

export default DS.Model.extend({
  plan: DS.belongsTo('plan'),
  component: DS.belongsTo('component'),
  name: DS.attr(),
  constraint: DS.attr({ defaultValue: 'disabled'}),
  price: DS.attr({ defaultValue: 0}),
  pricePrecision: DS.attr('number', { defaultValue: 2 })
});
