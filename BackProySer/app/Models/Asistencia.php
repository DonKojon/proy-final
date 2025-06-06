<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Usuario;
use App\Models\Curso;

class Asistencia extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_asistencia';

    protected $fillable = [
        'id_usuario_estudiante',
        'id_curso',
        'fecha',
        'estado',
    ];

    public function estudiante()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario_estudiante');
    }

    public function curso()
    {
        return $this->belongsTo(Curso::class, 'id_curso');
    }
}
