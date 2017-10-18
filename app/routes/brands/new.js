import Protected from './../protected';

export default Protected.extend({
  model() {
    return this.get('store').createRecord('brand',{});
  }
});
