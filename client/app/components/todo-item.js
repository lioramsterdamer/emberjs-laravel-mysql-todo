import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),

  actions: {
    toggle(_event) {
      this.task.set('done', !this.task.get('done'))
      this.task.save();
    },

    editTitle(_event) {
      this.set('editTitle', true);
      // this.$('.task-title input').focus();
    },

    editTitleDone(event) {
      if (event.code == 'Enter') {
        let title = this.$('.task-title input').val();
        this.task.set('title', title);
        this.task.save();
        this.set('editTitle', false);
        return;
      }
      if (event.keyCode == 27) {
        this.set('editTitle', false);
        return;
      }
    },

    deleteTask(_event) {
      this.task.deleteRecord();
      this.task.save();
    }
  }
});
