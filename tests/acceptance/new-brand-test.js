import { test } from 'qunit';
import moduleForAcceptance from 'reseller/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'reseller/tests/helpers/ember-simple-auth';
moduleForAcceptance('Acceptance | new brand');

test('should redirect to login when visiting /brands/new', function(assert) {
  visit('/brands/new');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('creating new brand', function(assert) {
  visit('/brands/new');
  authenticateSession(this.application);

  fillIn('.brand--name', 'New Brand');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), '/brands/3');
  });
});

test('canceling new brand', function(assert) {
  visit('/brands/new');
  authenticateSession(this.application);

  fillIn('.brand--name', 'New Brand');
  click('.button--cancel');

  andThen(function() {
    let value = find('.brand--name').val();
    assert.equal('', value);
  });
});

test('creating an invalid brand', function(assert) {
  visit('/brands/new');
  authenticateSession(this.application);

  fillIn('.brand--name', '');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), '/brands/new');
    let validationError = find('.brand--name-error').text();
    assert.equal("Name can't be blank", validationError);
  });
});
