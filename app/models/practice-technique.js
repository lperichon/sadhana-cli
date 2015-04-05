import DS from 'ember-data';

export default DS.Model.extend({
  position: DS.attr('string'),
  practice_part: DS.belongsTo('practice-part'),
  technique: DS.belongsTo('technique'),
  minutes: DS.attr('number'),
  seconds: DS.attr('number'),
  compensate: DS.attr('boolean')
});