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
  selectContentType: [
    {label: "5", value: 5},
    {label: "4", value: 4},
    {label: "3", value: 3},
    {label: "2", value: 2},
    {label: "1", value: 1}
  ],
  actions: {
    submit: function() {
      var newReview = this.store.createRecord('review', {
        user: this.get('user'),
        text: this.get('text'),
        rating: this.get('selectedContentType.value')
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
