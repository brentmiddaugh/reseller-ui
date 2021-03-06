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
  this.route('brand', {path: '/brands/:brand_id'}, function() {
    this.route('edit');
    this.route('plans', function() {
      this.route('new');
    });
    this.route('components', function() {
      this.route('new');
    });
    this.route('usage-types', function() {
      this.route('new');
    });
  });
  this.route('plan', {path: '/plans/:plan_id'}, function() {
    this.route('edit');
  });
  this.route('component', {path: '/components/:component_id'}, function() {
    this.route('edit');
  });
  this.route('usage-type', {path: '/usage-types/:usage_type_id'}, function() {
    this.route('edit');
  });
});

export default Router;
