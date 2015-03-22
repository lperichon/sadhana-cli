import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('practice-part', {
  // Specify the other units that are required for this test.
  needs: ['model:practice', 'model:part', 'model:practice-technique', 'model:technique']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
