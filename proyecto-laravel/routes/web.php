<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//use App\Image;



Route::get('/', function () {
/*    $images = Image::all();
    foreach ($images as $image) {
    	echo $image->description."<br>";
    	echo $image->user->name."<br>";
    	echo $image->image_path."<br>";

    echo "<h2>Comentarios</h2>";

	    foreach ($image->comments as $comment) {
	    	echo "<br><strong>".$comment->content."</strong><br>";
	    }

	    echo "Likes: ".count($image->likes);

		echo "<hr>";
	}
    die;
*/
    return view('welcome');
});

Route::get('images/{id}', function() {
    //
});

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/configuracion','UserController@config')->name('config');
Route::post('/user/update','UserController@update')->name('user.update');
Route::get('user/avatar/{filename}', 'UserController@getImage')->name('user.avatar');
Route::get('profile/{id}', 'UserController@profile')->name('profile');
Route::get('/comunidad/{search?}','UserController@index')->name('user.index');

Route::get('image/create','ImageController@create')->name('image.create');
Route::post('image/save','ImageController@save')->name('image.save');
Route::post('image/saveEdit','ImageController@saveEdit')->name('image.saveEdit');
Route::get('image/file/{filename}','ImageController@getImage')->name('image.file');
Route::get('image/{id}','ImageController@detail')->name('image.detail');
Route::get('image/delete/{id}','ImageController@delete')->name('image.delete');
Route::get('image/edit/{id}','ImageController@edit')->name('image.edit');

Route::post('comment/save','CommentController@save')->name('comment.save');
Route::get('comment/delete/{id}','CommentController@delete')->name('comment.delete');

Route::get('like/{image_id}','LikeController@like')->name('like.save');
Route::get('dislike/{image_id}','LikeController@dislike')->name('like.delete');
Route::get('/likes','LikeController@index')->name('like.index');