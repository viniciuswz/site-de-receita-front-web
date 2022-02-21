<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->middleware('jwt.auth')->group(function () {
    Route::post('me',  [App\Http\Controllers\UserAuthController::class, 'me']);
    Route::post('logout',  [App\Http\Controllers\UserAuthController::class, 'logout']);
});

Route::prefix('v1')->group(function () {
    Route::post('login',  [App\Http\Controllers\UserAuthController::class, 'login']);
    Route::prefix('user')->group(function () {
        Route::post('',  [App\Http\Controllers\UsuarioController::class, 'insert']);
    });
});
