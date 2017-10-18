import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('setup');
  this.route('brands', function() {
    this.route('new');
  });
  this.route('brand', {path: '/brands/:brand_id'});
});

export default Router;
