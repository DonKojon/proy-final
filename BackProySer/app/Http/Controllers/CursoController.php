<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index()
    {
        return Curso::with('profesor')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'nullable',
            'id_usuario_profesor' => 'required|exists:usuarios,id_usuario',
        ]);

        return Curso::create($request->all());
    }

    public function show($id)
    {
        return Curso::with('tareas', 'notas', 'asistencias')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $curso = Curso::findOrFail($id);
        $curso->update($request->all());
        return $curso;
    }

    public function destroy($id)
    {
        Curso::destroy($id);
        return response()->json(['message' => 'Curso eliminado']);
    }
}
