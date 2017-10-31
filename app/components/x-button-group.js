import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['btn-group'],

  actions: {
    onClick(value) {
      this.get('onClick')(value);
    }
  }
});
