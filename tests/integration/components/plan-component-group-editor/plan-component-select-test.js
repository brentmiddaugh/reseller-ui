import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plan-component-group-editor/plan-component-select', 'Integration | Component | plan component group editor/plan component select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{plan-component-group-editor/plan-component-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#plan-component-group-editor/plan-component-select}}
      template block text
    {{/plan-component-group-editor/plan-component-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
