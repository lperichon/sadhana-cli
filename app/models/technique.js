import DS from 'ember-data';

var Technique = DS.Model.extend({
	code: DS.attr('string'),
	filename: DS.attr('string'),
	thumbUrl: function() {
	  return 'http://s3.amazonaws.com/sadhana_production/photos/'+ this.get('id') +'/thumb/' + this.get('filename');
	}.property('filename'),
	imageUrl: function() {
	  return 'http://s3.amazonaws.com/sadhana_production/photos/'+ this.get('id') +'/medium/' + this.get('filename');
	}.property('filename')
});

export default Technique;