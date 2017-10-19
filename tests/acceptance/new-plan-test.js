import { test } from 'qunit';
import moduleForAcceptance from 'reseller/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'reseller/tests/helpers/ember-simple-auth';
moduleForAcceptance('Acceptance | new plan');

test('should redirect to login when visiting /brands/plan/new', function(assert) {
  visit('/brands/1/plans/new');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('creating new plan', function(assert) {

  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/plans/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.plan--name', 'New Plan');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), '/plans/1');
  });
});

test('canceling new plan', function(assert) {
  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/plans/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.plan--name', 'New Plan');
  click('.button--cancel');

  andThen(function() {
    let value = find('.plan--name').val();
    assert.equal('', value);
  });
});

test('creating an invalid plan', function(assert) {
  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/plans/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.plan--name', '');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), `/brands/${brand.id}/plans/new`);
    let validationError = find('.plan--name-error').text();
    assert.equal("Name can't be blank", validationError);
  });
});
