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

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/search', 'SearchController@index')->name('search');

Route::group(['middleware' => ['auth', 'web']], function () {

	Route::get('/friend',                'FriendController@index')->name('friends');
	Route::get('/friend-requests',       'FriendController@requests')->name('requests');
	Route::get('/friends/add/{user}',    'FriendController@add')->name('friends.add');
	Route::get('/friends/accept/{user}', 'FriendController@accept')->name('friends.accept');
	
	Route::get('/find-friends',        'FriendshipController@findFriends')->name('findFriends');
	Route::resource('/friendship',     'FriendshipController');
	
	Route::resource('/profile',        'ProfileController');
	Route::get('/profile/{id}/{slug}', 'ProfileController@getWithSlug')->name('getWithSlug');

	Route::get('/admin', 'Admin\AdminController@index')->name('admin');

	Route::get('/admin/favicon',        'Admin\FaviconController@index')->name('admin.favicon');
	Route::post('/admin/favicon/store', 'Admin\FaviconController@store')->name('admin.favicon.store');
	
});
