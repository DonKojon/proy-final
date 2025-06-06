<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Usuario;
use App\Models\Tarea;
use App\Models\Nota;
use App\Models\Asistencia;

class Curso extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_curso';

    protected $fillable = [
        'nombre',
        'descripcion',
        'id_usuario_profesor',
    ];

    public function profesor()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario_profesor');
    }

    public function estudiantes()
    {
        return $this->belongsToMany(Usuario::class, 'curso_estudiante', 'id_curso', 'id_usuario_estudiante');
    }

    public function tareas()
    {
        return $this->hasMany(Tarea::class, 'id_curso');
    }

    public function notas()
    {
        return $this->hasMany(Nota::class, 'id_curso');
    }

    public function asistencias()
    {
        return $this->hasMany(Asistencia::class, 'id_curso');
    }
}
