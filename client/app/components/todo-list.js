import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  displayNewTask: false,

  actions: {
    newTaskDisplay(_event) {
      this.set('displayNewTask', true)
    },
    newTaskCancel(_event) {
      this.set('displayNewTask', false)
    },
    newTaskAdd(_event) {
      _event && _event.preventDefault();
      let title = this.$('.new-task-title').val();
      let task = this.get('store').createRecord('task', { title: title, done: false });
      task.save();
      this.set('displayNewTask', false);
    }
  }
});
