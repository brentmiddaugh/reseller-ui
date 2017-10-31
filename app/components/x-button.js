import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: 'btn btn-sm',
  classNameBindings: ['isSelected:btn-primary:btn-outline-primary'],

  isSelected: function(){
    return this.get('value') == this.get('optionValue');
  }.property('value'),

  click() {
    this.get('onClick')(this.get('optionValue'));
    return false;
  }
});
