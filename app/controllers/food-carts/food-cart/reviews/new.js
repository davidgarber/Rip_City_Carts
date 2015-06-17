import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      var newReview = this.store.createRecord('review', {
        user: this.get('user'),
        text: this.get('text')
      });
      newReview.save();
      this.setProperties({
        user: '',
        text: ''
      });
    }
  }
});
