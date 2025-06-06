<?php

namespace App\Http\Controllers;

use App\Models\EntregaTarea;
use Illuminate\Http\Request;

class EntregaTareaController extends Controller
{
    public function index()
    {
        return EntregaTarea::with(['tarea', 'estudiante'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_tarea' => 'required|exists:tareas,id_tarea',
            'id_usuario_estudiante' => 'required|exists:usuarios,id_usuario',
            'archivo' => 'required|string',
            'fecha_entrega' => 'required|date',
        ]);

        return EntregaTarea::create($request->all());
    }

    public function show($id)
    {
        return EntregaTarea::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $entrega = EntregaTarea::findOrFail($id);
        $entrega->update($request->all());
        return $entrega;
    }

    public function destroy($id)
    {
        EntregaTarea::destroy($id);
        return response()->json(['message' => 'Entrega eliminada']);
    }
}
