<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Curso;
use App\Models\EntregaTarea;

class Tarea extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_tarea';

    protected $fillable = [
        'titulo',
        'descripcion',
        'fecha_entrega',
        'id_curso',
    ];

    public function curso()
    {
        return $this->belongsTo(Curso::class, 'id_curso');
    }

    public function entregas()
    {
        return $this->hasMany(EntregaTarea::class, 'id_tarea');
    }
}
