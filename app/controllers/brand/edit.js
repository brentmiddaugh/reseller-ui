import Ember from 'ember';
import BrandValidations from '../../validations/brand';

export default Ember.Controller.extend({
  BrandValidations,

  actions: {
    save(changeset) {
      changeset.validate().then(()=> {
        if(changeset.get('isValid')) {
          changeset.save().then(()=> {
            this.transitionToRoute('brand', changeset.get('id'));
          });
        }
      });
    },

    rollback(changeset) {
      changeset.rollback();
      this.transitionToRoute('brand', changeset.get('id'));
    }
  }
});
