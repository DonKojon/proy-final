<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Curso;
use App\Models\Usuario;

class Nota extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_nota';

    protected $fillable = [
        'id_usuario_estudiante',
        'id_curso',
        'calificacion',
        'observacion',
        'fecha',
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
