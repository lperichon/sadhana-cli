import DS from 'ember-data';

var Part = DS.Model.extend({
	symbol: DS.attr('string')
});

export default Part;

Part.reopenClass({
  FIXTURES: [
    { id: 1, symbol: 'mudra' },
    { id: 2, symbol: 'puja' },
    { id: 3, symbol: 'mantra'},
    { id: 4, symbol: 'pranayama'},
    { id: 5, symbol: 'kriya'},
    { id: 6, symbol: 'asana'},
    { id: 7, symbol: 'yoganidra'},
    { id: 8, symbol: 'samyama'}
  ]
});