import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
