import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  plans: hasMany(),
  components: hasMany(),
  usageTypes: hasMany()
});
