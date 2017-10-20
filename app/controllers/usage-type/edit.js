import Ember from 'ember';
import UsageTypeValidations from '../../validations/usage-type';

export default Ember.Controller.extend({
  UsageTypeValidations,

  actions: {
    save(changeset) {
      changeset.validate().then(()=> {
        if(changeset.get('isValid')) {
          changeset.save().then(()=> {
            this.transitionToRoute('usage-type', changeset.get('id'));
          });
        }
      });
    },

    rollback(changeset) {
      changeset.rollback();
      this.transitionToRoute('usage-type', changeset.get('id'));
    }
  }
});
