import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('food-carts', {path: '/'}, function() {
    this.route('food-cart', {path: ':cart_id'});
    this.route('new');
  });
  this.route('about');
});

export default Router;
