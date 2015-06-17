import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      var newFoodCart = this.store.createRecord('food-cart', {
        name: this.get('name'),
        cuisine: this.get('cuisine')
      });
      newFoodCart.save();
      this.setProperties({
        name: '',
        cuisine: ''
      });
    }
  }
});
