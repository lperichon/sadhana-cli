import DS from 'ember-data';

export default DS.Model.extend({
  practice: DS.belongsTo('practice'),
  position: DS.attr('string'),
  part: DS.belongsTo('part'),
  practiceTechniques: DS.hasMany('practiceTechnique')
});
