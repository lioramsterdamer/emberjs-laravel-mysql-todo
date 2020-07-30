import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const TaskData = EmberObject.extend({
  tasks: null,

  total : computed('tasks.[]', 'tasks.@each.{isDeleted,done}', function() {
    let tasks = this.get('tasks')
    let cc = 0;
    tasks.forEach(function(vv) {
      if ( !vv.isDeleted ) {
        cc++;
      }
    })
    return cc;
  }),
  done : computed('tasks.[]','tasks.@each.{isDeleted,done}', function() {
    let tasks = this.get('tasks')
    let cc = 0;
    tasks.forEach(function(vv) {
      if ( vv.done && !vv.isDeleted ) {
        cc++;
      }
    })
    return cc;
  }),
  todo : computed('tasks.[]','tasks.@each.{isDeleted,done}', function() {
    let tasks = this.get('tasks')
    let cc = 0;
    tasks.forEach(function(vv) {
      if ( !vv.done && !vv.isDeleted) {
        cc++;
      }
    })
    return cc;
  }),
});

export default Route.extend({
  model() {
    return TaskData.create({
      tasks : this.store.findAll('task')
    });
  },
})
