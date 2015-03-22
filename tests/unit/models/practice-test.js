import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('practice', {
  // Specify the other units that are required for this test.
  needs: ['model:practice-part','model:part', 'model:practice-technique', 'model:technique']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
