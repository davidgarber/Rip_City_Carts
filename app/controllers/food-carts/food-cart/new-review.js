import Ember from 'ember';

export default Ember.Controller.extend({
  // actions: {
  //   submit: function() {
  //     var review = this.get('model')
  //     review.save();
  //
  //     var controller = this;
  //     review.get('food-cart').then(function(foodCart) {
  //       foodCart.save();
  //       controller.transitionToRoute('food-carts.food-cart', food-cart.id);
  //     });
  //   }
  needs: ['food-carts/food-cart'],
  actions: {
    submit: function() {
      var newReview = this.store.createRecord('review', {
        user: this.get('user'),
        text: this.get('text')
      });
      var cart = this.get('controllers.food-carts/food-cart.model');
      newReview.save().then(function() {
        cart.get('reviews').pushObject(newReview);
        cart.save();
      });

      this.setProperties({
        user: '',
        text: ''
      });

      this.transitionToRoute('food-carts.food-cart', cart);
    }
  }
});
