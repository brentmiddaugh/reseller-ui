import { moduleFor, test } from 'ember-qunit';

moduleFor('route:brand', 'Unit | Route | brand', {
  // Specify the other units that are required for this test.
  needs: ['service:session', 'service:currentUser']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
