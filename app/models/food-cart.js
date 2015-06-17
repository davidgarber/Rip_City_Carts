import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cuisine: DS.attr('string'),
  reviews: DS.hasMany("review", {async: true})
});
