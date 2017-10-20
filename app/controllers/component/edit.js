import Ember from 'ember';
import ComponentValidations from '../../validations/component';

export default Ember.Controller.extend({
  ComponentValidations,

  actions: {
    save(changeset) {
      changeset.validate().then(()=> {
        if(changeset.get('isValid')) {
          changeset.save().then(()=> {
            this.transitionToRoute('component', changeset.get('id'));
          });
        }
      });
    },

    rollback(changeset) {
      changeset.rollback();
      this.transitionToRoute('component', changeset.get('id'));
    }
  }
});
