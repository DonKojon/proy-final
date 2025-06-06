<?php

namespace App\Http\Controllers;

use App\Models\Asistencia;
use Illuminate\Http\Request;

class AsistenciaController extends Controller
{
    public function index()
    {
        return Asistencia::with(['curso', 'estudiante'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_usuario_estudiante' => 'required|exists:usuarios,id_usuario',
            'id_curso' => 'required|exists:cursos,id_curso',
            'fecha' => 'required|date',
            'estado' => 'required|in:presente,ausente,justificado',
        ]);

        return Asistencia::create($request->all());
    }

    public function show($id)
    {
        return Asistencia::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $asistencia = Asistencia::findOrFail($id);
        $asistencia->update($request->all());
        return $asistencia;
    }

    public function destroy($id)
    {
        Asistencia::destroy($id);
        return response()->json(['message' => 'Asistencia eliminada']);
    }
}
