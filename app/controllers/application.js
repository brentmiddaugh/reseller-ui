import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),
  currentUser: service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
