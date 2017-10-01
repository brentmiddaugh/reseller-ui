import { test } from 'qunit';
import moduleForAcceptance from 'reseller/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('should log user in', function(assert) {
  visit('/login');
  fillIn('input#identification', 'joe@joe.test');
  fillIn('input#password', 'password');
  click('button#submit');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should not log user in', function(assert) {
  visit('/login');
  fillIn('input#identification', 'joe@example.org');
  fillIn('input#password', 'not-a-legit-password');
  click('button#submit');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('should redirect to setup when reseller is in onboarding status', function(assert) {
  visit('/login');
  fillIn('input#identification', 'bob@bob.test');
  fillIn('input#password', 'password');
  click('button#submit');

  andThen(function() {
    assert.equal(currentURL(), '/setup');
  });

})
