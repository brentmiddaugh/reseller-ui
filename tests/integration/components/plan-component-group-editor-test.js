import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plan-component-group-editor', 'Integration | Component | plan component group editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{plan-component-group-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#plan-component-group-editor}}
      template block text
    {{/plan-component-group-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
