<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Models\Role;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\CursoController;
use App\Http\Controllers\TareaController;
use App\Http\Controllers\EntregaTareaController;
use App\Http\Controllers\NotaController;
use App\Http\Controllers\AsistenciaController;


Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::put('/usuarios/{id}', [UsuarioController::class, 'update']);
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);
// Route::get('/roles', function () {return Role::all();});
Route::post('/login', [LoginController::class, 'login']);

Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);
Route::put('/roles/{id}', [RoleController::class, 'update']);

Route::get('/cursos', [CursoController::class, 'index']);
Route::post('/cursos', [CursoController::class, 'store']);
Route::delete('/cursos/{id}', [CursoController::class, 'destroy']);
Route::put('/cursos/{id}', [CursoController::class, 'update']);

Route::get('/asistencia', [AsistenciaController::class, 'index']);
Route::post('/asistencia', [AsistenciaController::class, 'store']);
Route::delete('/asistencia/{id}', [AsistenciaController::class, 'destroy']);
Route::put('/asistencia/{id}', [AsistenciaController::class, 'update']);


Route::apiResource('usuarios', UsuarioController::class);
Route::apiResource('cursos', CursoController::class);
Route::apiResource('tareas', TareaController::class);
Route::apiResource('entregas', EntregaTareaController::class);
Route::apiResource('notas', NotaController::class);
Route::apiResource('asistencias', AsistenciaController::class);
