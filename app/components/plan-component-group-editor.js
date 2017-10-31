import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['plan-component-group-editor'],

  constraintOptions: {
    'Required': 'required',
    'Optional': 'optional',
    'Disabled': 'disabled'
  },

  actions: {
    setConstraint(value) {
      this.set('planComponentGroup.constraint', value);
    }
  }
});
