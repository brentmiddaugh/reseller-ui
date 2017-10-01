import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),
  routing: service('-routing'),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').findRecord('user','me').then((user) => {
        this.set('user', user);

        if(user.get('reseller.status') == 'onboarding') {
          this.get("routing").transitionTo("setup");
        }
      });
    } else {
      return RSVP.resolve();
   }
  }
});
