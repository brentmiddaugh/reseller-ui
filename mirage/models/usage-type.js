import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  brand: belongsTo(),
  children: hasMany('usageType')
});
