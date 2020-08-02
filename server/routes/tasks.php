<?php
use Illuminate\Http\Request;
use App\Task;


Route::get('', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Task::all();
});
Route::get('{id}', function($id) {
    return Task::find($id);
});

Route::post('', function(Request $request) {
    $task = Task::create($request->all());
    return $task;
});

Route::put('{id}', function(Request $request, $id) {
    $task = Task::findOrFail($id);
    $task->update($request->all());
    return $task;
});

Route::patch('{id}', function(Request $request, $id) {
    $task = Task::findOrFail($id);
    $task->update($request->all());
    return $task;
});

Route::delete('{id}', function($id) {
    Task::find($id)->delete();
    return 204;
});
