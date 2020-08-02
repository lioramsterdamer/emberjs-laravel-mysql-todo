<?php
use Illuminate\Http\Request;
use App\Task;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::get('tasks', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Task::all();
});
Route::get('tasks/{id}', function($id) {
    return Task::find($id);
});

Route::post('tasks', function(Request $request) {
    $task = Task::create($request->all());
    return $task;
});

Route::put('tasks/{id}', function(Request $request, $id) {
    $task = Task::findOrFail($id);
    $task->update($request->all());
    return $task;
});

Route::patch('tasks/{id}', function(Request $request, $id) {
    $task = Task::findOrFail($id);
    $task->update($request->all());
    return $task;
});

Route::delete('tasks/{id}', function($id) {
    Task::find($id)->delete();
    return 204;
});
