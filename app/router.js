import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('food-carts', {path: '/'}, function() {
    this.route('food-cart', {path: 'food-cart/:cart_id'}, function() {
      this.route('reviews', function() {
        this.route('new');
      });
    });
    this.route('new');
  });
  this.route('about');

  // this.route('food-carts', function() {
  //   this.route('food-cart', function() {
  //     this.route('new-review');
  //     this.route('reviews');
  //   });
  // });
});

export default Router;
