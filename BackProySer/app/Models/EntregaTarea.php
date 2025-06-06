<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Tarea;
use App\Models\Usuario;

class EntregaTarea extends Model
{
    use HasFactory;

    protected $table = 'entregas_tarea';
    protected $primaryKey = 'id_entrega';

    protected $fillable = [
        'id_tarea',
        'id_usuario_estudiante',
        'archivo',
        'fecha_entrega',
    ];

    public function tarea()
    {
        return $this->belongsTo(Tarea::class, 'id_tarea');
    }

    public function estudiante()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario_estudiante');
    }
}
