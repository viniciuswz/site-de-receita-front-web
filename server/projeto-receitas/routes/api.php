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
    Route::post('me',  [App\Http\Controllers\AuthControllerExemple::class, 'me']);
    Route::post('refresh',  [App\Http\Controllers\AuthControllerExemple::class, 'refresh']);
    Route::post('logout',  [App\Http\Controllers\AuthControllerExemple::class, 'logout']);
});

Route::prefix('v1')->group(function () {
    Route::prefix('user')->group(function () {
        Route::post('',  [App\Http\Controllers\UsuarioController::class, 'insert']);
    });
});

Route::post('login',  [App\Http\Controllers\AuthControllerExemple::class, 'login']);

Route::apiResource('receita', 'App\Http\Controllers\ReceitaController');