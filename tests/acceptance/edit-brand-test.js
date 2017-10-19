import { test } from 'qunit';
import moduleForAcceptance from 'reseller/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'reseller/tests/helpers/ember-simple-auth';
moduleForAcceptance('Acceptance | edit brand');

test('should redirect to login when visiting edit', function(assert) {
  visit('/brands/1/edit');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('updating name of brand', function(assert) {

  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/edit`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.brand--name', 'Update Brand');
  click('.button--save');

  andThen(function() {
    assert.equal(currentURL(), `/brands/${brand.id}`);
    let title = find('h2').text();
    assert.equal('Update Brand', title);
  });
});

test('canceling edit', function(assert) {

  let brand = server.create('brand', {resellerId: 1, name: 'Test Brand'});
  let user = server.create('user', {resellerId: 1, email: 'test@test.com', token: 'test.token'});
  visit(`/brands/${brand.id}/edit`);
  authenticateSession(this.application, {email: user.email, token: user.token});

  fillIn('.brand--name', 'Update Brand');
  click('.button--cancel');

  andThen(function() {
    assert.equal(currentURL(), `/brands/${brand.id}`);
    let title = find('h2').text();
    assert.equal('Test Brand', title);
  });
});
