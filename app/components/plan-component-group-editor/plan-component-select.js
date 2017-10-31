import Ember from 'ember';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  classNames: ['plan-component-select'],

  offset: 0,
  displayCount: 3,

  planComponentsToDisplay: computed('offset', 'planComponents', function() {
    var start = this.get('offset');
    var end   = start + this.get('displayCount');
    return this.get('planComponents').slice(start, end);
  }),

  prevBtnDisabled: computed('offset', function() {
    return this.get('offset') == 0;
  }),

  nextBtnDisabled: computed('offset', function() {
    var start = this.get('offset');
    var end   = start + this.get('displayCount');

    return end >= this.get('planComponents.length');
  }),

  actions: {
    prev() {
      if(! this.get('prevBtnDisabled')) {
        this.decrementProperty('offset');
      }
    },

    next() {
      if(! this.get('nextBtnDisabled')) {
        this.incrementProperty('offset');
      }
    }
  }
});
