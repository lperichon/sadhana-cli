import DS from 'ember-data';

var Technique = DS.Model.extend({
	code: DS.attr('string'),
	thumbUrl: DS.attr('string')
});

export default Technique;

Technique.reopenClass({
  FIXTURES: [
  	{ id: 1, code: '50', thumbUrl: 'http://s3.amazonaws.com/sadhana_production/photos/2311/thumb/50.shivaok-defCMYK.png' },
  	{ id: 2, code: '44', thumbUrl: 'http://s3.amazonaws.com/sadhana_production/photos/2305/thumb/44.pronam-defCMYK.png' }
  ]
});