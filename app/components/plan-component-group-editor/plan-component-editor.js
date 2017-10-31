import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  classNames: 'plan-component-editor',

  constraintOptions: {
    'Default': 'default',
    'Option': 'option',
    'Disabled': 'disabled'
  },

  actions: {
    edit() {
      this.set('isEditing', true);
    },

    cancel() {
      this.get('model').rollback();
      this.set('isEditing', false);
    },

    save() {
      this.get('model').execute();
      this.set('isEditing', false);
    },

    setConstraint(constraint) {
      this.set('model.constraint', constraint);
    }
  }
});
