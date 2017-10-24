import { test } from 'qunit';
import moduleForAcceptance from 'reseller/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'reseller/tests/helpers/ember-simple-auth';
moduleForAcceptance('Acceptance | new usage-type');

test('should redirect to login when visiting /brands/usage-type/new', function(assert) {
  visit('/brands/1/usage-types/new');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('creating new usage-type', function(assert) {

  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/usage-types/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.usage-type--name', 'New UsageType');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), '/usage-types/7');
  });
});

test('canceling new usage-type', function(assert) {
  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/usage-types/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.usage-type--name', 'New Usage Type');
  click('.button--cancel');

  andThen(function() {
    assert.equal(currentURL(), `/brands/${brand.id}/usage-types`);
  });
});

test('creating an invalid usage-type', function(assert) {
  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/usage-types/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.usage-type--name', '');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), `/brands/${brand.id}/usage-types/new`);
    let validationError = find('.usage-type--name-error').text();
    assert.equal("Name can't be blank", validationError);
  });
});
