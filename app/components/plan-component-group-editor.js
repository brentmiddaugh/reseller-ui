import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  classNames: ['plan-component-group-editor'],

  constraintOptions: {
    'Required': 'required',
    'Optional': 'optional',
    'Disabled': 'disabled'
  },

  isNotDisabled: computed('model.constraint', function() {
    return this.get('model.constraint') != 'disabled';
  }),

  actions: {
    setConstraint(value) {
      this.set('model.constraint', value);
    }
  }
});
