
export default function() {
   
  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  this.urlPrefix = 'http://127.0.0.1:80';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  const dev = false;

  if ( dev ) {
    function task(id,title,done) {
      return {
        type  : 'tasks',
        id    : id,
        attributes: {
          title : title,
          done  : done
        }
      }
    }

    let data = [
      task(1,'Task #1',false),
      task(2,'Task #2',false),
      task(3,'Task #3',true )
    ]
    this.get('/tasks', function() {
      return {
        data : data
      };
    });

    this.post('/tasks', function({ contacts }, request) {
      let attrs = this.normalizedRequestAttrs();
      console.log(attrs);
      data.push(task(2,attrs.title,attrs.done));
      return 201;
    });
  }
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
