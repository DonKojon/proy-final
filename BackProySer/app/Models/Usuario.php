<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Curso;

class Usuario extends Model
{
    protected $primaryKey = 'id_usuario';
    protected $fillable = ['nombre', 'email', 'pass', 'rol'];
    protected $hidden = ['pass'];

    public function cursosDictados() {
        return $this->hasMany(Curso::class, 'id_usuario_profesor');
    }

    public function cursosInscritos() {
        return $this->belongsToMany(Curso::class, 'curso_estudiante', 'id_usuario_estudiante', 'id_curso');
    }
}

