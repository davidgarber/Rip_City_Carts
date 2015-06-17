import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  user: DS.attr('string'),
  foodCart: DS.belongsTo("food-cart", {async: true})
});