import Ember from 'ember';
import PlanValidations from '../../validations/plan';

export default Ember.Controller.extend({
  PlanValidations,

  actions: {
    save(changeset) {
      changeset.validate().then(()=> {
        if(changeset.get('isValid')) {
          changeset.save().then(()=> {
            this.transitionToRoute('plan', changeset.get('id'));
          });
        }
      });
    },

    rollback(changeset) {
      changeset.rollback();
      this.transitionToRoute('plan', changeset.get('id'));
    }
  }
});
