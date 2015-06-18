import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var foodCart = this.modelFor('food-cart');
    var review = this.store.createRecord('review');
    foodCart.get('reviews').then(function(reviews) {
      reviews.pushObject(review);
    });
    return review;
  }
});
