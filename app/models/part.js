import DS from 'ember-data';

var Part = DS.Model.extend({
	symbol: DS.attr('string')
});

export default Part;

Part.reopenClass({
  FIXTURES: [
    { id: 1, symbol: 'mudra' },
    { id: 2, symbol: 'puja' }
  ]
});