import { test } from 'qunit';
import moduleForAcceptance from 'reseller/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'reseller/tests/helpers/ember-simple-auth';
moduleForAcceptance('Acceptance | new component');

test('should redirect to login when visiting /brands/component/new', function(assert) {
  visit('/brands/1/components/new');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('creating new component', function(assert) {

  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/components/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.component--name', 'New Plan');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), '/components/1');
  });
});

test('canceling new component', function(assert) {
  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/components/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.component--name', 'New Plan');
  click('.button--cancel');

  andThen(function() {
    let value = find('.component--name').val();
    assert.equal('', value);
  });
});

test('creating an invalid component', function(assert) {
  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/components/new`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.component--name', '');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), `/brands/${brand.id}/components/new`);
    let validationError = find('.component--name-error').text();
    assert.equal("Name can't be blank", validationError);
  });
});
